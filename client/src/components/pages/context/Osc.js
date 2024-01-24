export default class Osc {
  constructor(actx, type, frequency, detune, envelope, connection) {
    this.actx = actx;
    this.envelope = envelope || {
      attack: 0.005,
      decay: 0.1,
      sustain: 0.6,
      release: 0.1,
    };
    this.osc = actx.createOscillator();
    this.osc.frequency.value = frequency;
    this.osc.detune.value = detune;
    this.osc.type = type;
    this.gateGain = actx.createGain();
    this.osc.connect(this.gateGain);
    this.gateGain.connect(connection);
    this.easing = 0.005;
    this.osc.start();
    this.start();
  }
  start() {
    let { currentTime } = this.actx;
    this.gateGain.gain.cancelScheduledValues(currentTime);
    this.gateGain.gain.setValueAtTime(0, currentTime + this.easing);
    this.gateGain.gain.linearRampToValueAtTime(1, currentTime + this.envelope.attack + this.easing);
    this.gateGain.gain.linearRampToValueAtTime(
      this.envelope.sustain,
      currentTime + this.envelope.attack + this.envelope.decay + this.easing
    );
  }
  stop() {
    let { currentTime } = this.actx;
    this.gateGain.gain.cancelScheduledValues(currentTime);
    this.gateGain.gain.setTargetAtTime(0, currentTime, this.envelope.release + this.easing);
    setTimeout(() => {
      this.osc.disconnect();
    }, 10000);
  }
}
