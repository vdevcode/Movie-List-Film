export function randomRgbaColor(opacity) {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    let color = `rgba(${R}, ${G}, ${B}, ${opacity})`;
    return color;
  }