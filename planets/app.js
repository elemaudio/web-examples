import WebRenderer from '@elemaudio/web-renderer';
import {el} from '@elemaudio/core';
import srvb from '@elemaudio/srvb';

import genSynth from './genSynth';
import {clear, draw} from './drawing';


// Constants
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const core = new WebRenderer();
const canvas = document.getElementById('canvas');
const clone = canvas.cloneNode();
const ctx = canvas.getContext('2d');
const cloneCtx = clone.getContext('2d');
const globalAlpha = 0.94 + (Math.random() * 0.05);

let width = canvas.width = clone.width = window.innerWidth;
let height = canvas.height = clone.height = window.innerHeight;

// Must be set after the assignment to width/height, which resets the
// state of the canvas contexts
cloneCtx.globalAlpha = globalAlpha;

// Our mutable app state
const state = {
  frameCount: 0,
  channelData: [
    (new Float32Array(512)).map((x, i) => Math.sin(i / 512 * 1 * Math.PI)),
    (new Float32Array(512)).map((x, i) => Math.cos(i / 512 * 1 * Math.PI)),
  ],
};

// Our main audio rendering step
core.on('load', function(e) {
  const bpm = 76;
  const n64Rate = 1 / ((60 / bpm) / 8);
  const adsrDecay = 3.5;
  const [syn1, syn2] = genSynth();

  let ll = el.add(...syn1.render(function(key, gs, fs, vs, i) {
    let t = el.train(n64Rate);
    let env = el.adsr(0.01, adsrDecay, 0, adsrDecay, el.seq({key: `${key}:gs`, seq: gs, hold: true}, t, 0));
    let gain = el.seq({key: `${key}:vs`, seq: vs, hold: true}, t, 0);

    return el.mul(env, el.sm(gain), el.cycle(el.smooth(el.tau2pole(0.01), el.seq({key: `${key}:fs`, seq: fs, hold: true}, t, 0))));
  }));

  let rr = el.add(...syn2.render(function(key, gs, fs, vs, i) {
    let t = el.train(n64Rate);
    let env = el.adsr(0.01, adsrDecay, 0, adsrDecay, el.seq({key: `${key}:gs`, seq: gs, hold: true}, t, 0));
    let gain = el.seq({key: `${key}:vs`, seq: vs, hold: true}, t, 0);

    return el.mul(env, el.sm(gain), el.cycle(el.smooth(el.tau2pole(0.01), el.seq({key: `${key}:fs`, seq: fs, hold: true}, t, 0))));
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
document.addEventListener('pointerdown', async function start(e) {
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

  document.removeEventListener('pointerdown', start);
});

// On resize, we need to scale our canvas size accordingly to preserve the
// correct drawing ratios.
window.addEventListener('resize', function(e) {
  width = canvas.width = clone.width = window.innerWidth;
  height = canvas.height = clone.height = window.innerHeight;

  // Setting width/height resets the canvas state, need to reapply these
  cloneCtx.globalAlpha = globalAlpha;
});

// Finally, our draw loop
window.requestAnimationFrame(function loop() {
  clear(ctx, cloneCtx, width, height);
  draw(ctx, state.frameCount++, width, height, state.channelData);
  window.requestAnimationFrame(loop);
});
