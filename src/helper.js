import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette(starterPalette) {
  let newPalette = {};
  for(let level of levels) {
    newPalette[level] = [];
  }
  for(let color of starterPalette) {
    let generatedColors = generateColors(color.color, 10);
    for(let i in generatedColors) {
      newPalette[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        hex: generatedColors[i],
        rgb: chroma(generatedColors[i]).css(),
        rgba: chroma(generatedColors[i]).css().replace("rgb", "rgba").replace(")", ",1.0)")
      }) 
    }
  }
  return newPalette;
}

function generateColors(hexColor, numberOfColors) {
  return chroma.scale(["#fff", hexColor, chroma(hexColor).darken(1.4).hex()])
         .mode("lab")
         .colors(numberOfColors);
}

export {generatePalette};