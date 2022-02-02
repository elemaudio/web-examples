// A simple polyphonic Synth which records note events against internal
// sequence data.
//
// After recording a series of events, call the render function to build
// a series of synth voices based on the aggregated sequence data.
export default class Synth {
  constructor(key, numVoices) {
    this.voices = Array.from({length: numVoices}).map(function(x, i) {
      return {
        key: `${key}:v:${i}`,
        gate: 0,
        freq: 440,
        velo: 0,
        data: {
          gateSeq: [],
          freqSeq: [],
          veloSeq: [],
        }
      };
    });

    this.nextVoice = 0;
  }

  reset() {
    this.voices.forEach(function(v) {
      v.gate = 0;
      v.freq = 440;
      v.velo = 0;
      v.data.gateSeq.length = 0;
      v.data.freqSeq.length = 0;
      v.data.veloSeq.length = 0;
    })

    this.nextVoice = 0;
  }

  step() {
    this.voices.forEach(function(voice, i) {
      voice.data.gateSeq.push(voice.gate);
      voice.data.freqSeq.push(voice.freq);
      voice.data.veloSeq.push(voice.velo);
    })
  }

  noteOn(freq, velo) {
    this.voices[this.nextVoice].gate = 1.0;
    this.voices[this.nextVoice].freq = freq;
    this.voices[this.nextVoice].velo = velo;

    if (++this.nextVoice >= this.voices.length) {
      this.nextVoice -= this.voices.length;
    }
  }

  noteOff(freq) {
    for (let i = 0; i < this.voices.length; ++i) {
      if (this.voices[i].freq === freq) {
        this.voices[i].gate = 0;
      }
    }
  }

  render(renderFunc) {
    return this.voices.map(function(voice, i) {
      return renderFunc(voice.key, voice.data.gateSeq, voice.data.freqSeq, voice.data.veloSeq, i);
    });
  }
}
