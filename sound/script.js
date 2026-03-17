const box = document.querySelector('.sound-button');

box.onclick = () => {
  const ctx = new AudioContext();
  const osc = ctx.createOscillator();

  osc.frequency.value = 440;   // A4
  osc.connect(ctx.destination);
  osc.start();

  setTimeout(() => osc.stop(), 3000);  // stop after 3 seconds
};
