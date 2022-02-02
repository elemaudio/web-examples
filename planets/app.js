import {ElementaryWebAudioRenderer as core, el} from '@elemaudio/core';
import srvb from '@elemaudio/srvb';
import teoria from 'teoria';

import Synth from './Synth';
import {clear, draw} from './drawing';


// Constants
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const canvas = document.getElementById('canvas');
const clone = canvas.cloneNode();
const ctx = canvas.getContext('2d');
const cloneCtx = clone.getContext('2d');
const globalAlpha = 0.96 + (Math.random() * 0.05);

let width = canvas.width = clone.width = window.innerWidth;
let height = canvas.height = clone.height = window.innerHeight;

// Must be set after the assignment to width/height, which resets the
// state of the canvas contexts
ctx.globalCompositeOperation = 'lighten';
cloneCtx.globalAlpha = globalAlpha;

// Our mutable app state
const state = {
  frameCount: 0,
  channelData: [
    (new Float32Array(512)).map((x, i) => Math.sin(i / 512 * 1 * Math.PI)),
    (new Float32Array(512)).map((x, i) => Math.cos(i / 512 * 1 * Math.PI)),
  ],
};

// Random seed stuff
let baseNote = teoria.note.fromKey(25 + Math.round(Math.random() * 24));
let accentNote = teoria.note.fromKey(baseNote.key() + 12);
let scaleType = ['major', 'minor', 'lydian', 'mixolydian'][Math.round(Math.random() * 3)];
let scale = accentNote.scale(scaleType).notes().concat(baseNote.scale(scaleType).notes());
let density = 0.02 + Math.random() * 0.2;
let similarity = Math.random();

console.log(`${baseNote.toString()} ${scaleType} ${density.toFixed(3)}/${similarity.toFixed(3)} alpha:${globalAlpha.toFixed(3)}`);

// Record a bunch of operations against our synth
let syn1 = new Synth('ll', 4);
let syn2 = new Synth('rr', 4);
let adsrDecay = 3.5;
let nextNote1 = 0;
let nextNote2 = 0;
let bpm = 76;
let n64Rate = 1 / ((60 / bpm) / 8);

// Eight bars of 16th notes
let atLeastOneNote = false;

while (!atLeastOneNote) {
  syn1.reset();
  syn2.reset();

  for (let i = 0; i < 128; ++i) {
    let playLeft = Math.random() < density;
    let playSimilar = Math.random() < similarity;

    if (playLeft) {
      syn1.noteOff(nextNote1);
      nextNote1 = scale[Math.floor(Math.random() * (scale.length - 1))].fq();
      syn1.noteOn(nextNote1, 0.125 + Math.random());
      atLeastOneNote = true;
    }

    // If we have high similarity, we duplicate the note event into the right
    // channel synth. If we fail our similarity check, we optionally play whatever
    // note we want in the right channel synth
    if (playLeft && playSimilar) {
      syn2.noteOff(nextNote2);
      nextNote2 = nextNote1;
      syn2.noteOn(nextNote2, Math.random());
    } else {
      if (Math.random() < density) {
        syn2.noteOff(nextNote2);
        nextNote2 = scale[Math.floor(Math.random() * (scale.length - 1))].fq();
        syn2.noteOn(nextNote2, 0.125 + Math.random() * 0.5);
        atLeastOneNote = true;
      }
    }

    syn1.step();
    syn2.step();
  }
}

core.on('load', function(e) {
  let ll = el.add(...syn1.render(function(key, gs, fs, vs, i) {
    let t = el.train(n64Rate);
    let env = el.adsr(0.01, adsrDecay, 0, adsrDecay, el.seq({key: `${key}:gs`, seq: gs, hold: true}, t));
    let gain = el.seq({key: `${key}:vs`, seq: vs, hold: true}, t);

    return el.mul(env, el.sm(gain), el.cycle(el.smooth(el.tau2pole(0.01), el.seq({key: `${key}:fs`, seq: fs, hold: true}, t))));
  }));

  let rr = el.add(...syn2.render(function(key, gs, fs, vs, i) {
    let t = el.train(n64Rate);
    let env = el.adsr(0.01, adsrDecay, 0, adsrDecay, el.seq({key: `${key}:gs`, seq: gs, hold: true}, t));
    let gain = el.seq({key: `${key}:vs`, seq: vs, hold: true}, t);

    return el.mul(env, el.sm(gain), el.cycle(el.smooth(el.tau2pole(0.01), el.seq({key: `${key}:fs`, seq: fs, hold: true}, t))));
  }));

  let xl = el.mul(0.2, el.scope({channels: 2}, ll, rr));
  let xr = el.mul(0.2, rr);

  let [yl, yr] = srvb({name: 'verb'}, 0.5, 0.8, 0.5, xl, xr);

  core.render(
    el.add(xl, el.mul(0.5, yl)),
    el.add(xr, el.mul(0.5, yr)),
  );

  core.on('scope', function(e) {
    state.channelData = e.data;
  });
});

// Clicking on the document initializes the web audio backend and restarts the
// visualization.
//
// We need this step because most browsers deny an AudioContext from starting
// before some user-initiated interaction.
document.addEventListener('click', async function start(e) {
  if (audioContext.state !== 'running') {
    await audioContext.resume();
  }

  let node = await core.initialize(audioContext, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });

  node.connect(audioContext.destination);

  // Reset the canvas state
  state.channelData = [
    (new Float32Array(512)).fill(0),
    (new Float32Array(512)).fill(0),
  ];

  ctx.clearRect(0, 0, width, height);
  state.frameCount = 0;

  document.removeEventListener('click', start);
});

// On resize, we need to scale our canvas size accordingly to preserve the
// correct drawing ratios.
window.addEventListener('resize', function(e) {
  width = canvas.width = clone.width = window.innerWidth;
  height = canvas.height = clone.height = window.innerHeight;

  // Setting width/height resets the canvas state, need to reapply these
  ctx.globalCompositeOperation = 'lighten';
  cloneCtx.globalAlpha = globalAlpha;
});

// Finally, our draw loop
window.requestAnimationFrame(function loop() {
  clear(ctx, cloneCtx, width, height);
  draw(ctx, state.frameCount++, width, height, state.channelData);
  window.requestAnimationFrame(loop);
});
