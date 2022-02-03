import teoria from 'teoria';

import Synth from './Synth';


// Random seed stuff
let baseNote = teoria.note.fromKey(25 + Math.round(Math.random() * 24));
let accentNote = teoria.note.fromKey(baseNote.key() + 12);
let scaleType = ['major', 'minor', 'lydian', 'mixolydian'][Math.round(Math.random() * 3)];
let scale = accentNote.scale(scaleType).notes().concat(baseNote.scale(scaleType).notes());

// Creates two synth instances, records a bunch of operations against each,
// and then returns the two as a pair.
//
// We use two synth instances, one for the left channel and one for the right,
// to create a wide stereo field with harmonic ratios, which yields nice
// figures in the Lissajous plot
export default function genSynth() {
  const syn1 = new Synth('ll', 4);
  const syn2 = new Synth('rr', 4);
  const density = 0.02 + Math.random() * 0.2;
  const similarity = Math.random();

  console.log(`${baseNote.toString()} ${scaleType} ${density.toFixed(3)}/${similarity.toFixed(3)}`);

  let nextNote1 = 0;
  let nextNote2 = 0;
  let atLeastOneNote = false;

  while (!atLeastOneNote) {
    syn1.reset();
    syn2.reset();

    // Eight bars of 16th notes
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

  return [syn1, syn2];
}
