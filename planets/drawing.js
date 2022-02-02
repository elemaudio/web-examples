const palette = Array.from({length: 16})
  .map((x, i) => 4 + ((i / 16) * 360))
  .filter((x) => Math.abs(x - 250) > 25);

const hue = palette[Math.round(Math.random() * (palette.length - 1))];

const phiTilt = (Math.PI / 2) + (Math.random() * Math.PI);
const thetaTilt = (Math.PI / 2) + (Math.random() * Math.PI);


// A simple "clear" trick which essentially multiplies the alpha value of any
// existing color content in the canvas, slowly decaying to transparent.
export function clear(ctx, clone, width, height) {
  clone.clearRect(0, 0, width, height);

  // Copy our existing context image onto the clone, which has its own globalAlpha,
  // so doing this will increase the opacity of the existing drawing that we place onto it
  clone.drawImage(ctx.canvas, 0, 0);

  // Then clear our original
  ctx.clearRect(0, 0, width, height);

  // Then we can draw back from our clone and we'll get the more-transparent version
  ctx.drawImage(clone.canvas, 0, 0);
}

// The main draw loop
//
// Maps oscilloscope data onto spherical coordinates, then plots the spherical
// positions onto the canvas
export function draw(ctx, frameCount, width, height, [leftData, rightData]) {
  // Mid points and radius
  let mx = width * 0.5;
  let my = height * 0.5;
  let mr = Math.min(mx, my) * 0.8;

  // Tilt + slow rotation
  let phiDelta = phiTilt + (frameCount / 1317);
  let thetaDelta = thetaTilt + (frameCount / 1000);

  // Slowly changing stroke color
  ctx.strokeStyle = `hsla(${(hue + (10 * Math.sin(frameCount / 157)) % 360)}, 91%, ${65 + 10 * Math.sin(frameCount / 100)}%, 0.94)`;
  ctx.beginPath();

  {
    // Place the channel data in spherical coordinates, then map back to cartesian for plotting
    let phi = phiDelta + Math.PI * leftData[0];
    let theta = thetaDelta + Math.PI * rightData[0];
    let radius = mr;

    let x = radius * Math.cos(phi) * Math.sin(theta);
    let y = radius * Math.sin(phi) * Math.sin(theta);
    let z = radius * Math.cos(theta);

    ctx.moveTo(mx + x, my + z);
  }

  for (let i = 1; i < leftData.length; ++i) {
    // Place the channel data in spherical coordinates, then map back to cartesian for plotting
    let phi = phiDelta + Math.PI * leftData[i];
    let theta = thetaDelta + Math.PI * rightData[i];
    let radius = mr;

    let x = radius * Math.cos(phi) * Math.sin(theta);
    let y = radius * Math.sin(phi) * Math.sin(theta);
    let z = radius * Math.cos(theta);

    ctx.lineTo(mx + x, my + z);
  }

  ctx.stroke();
}
