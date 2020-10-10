import * as Vibrant from "node-vibrant";
import chroma from "chroma-js";

const getColourObject = (painting, label) => {
  let colours = {};
  painting.getPalette((err, palette) => {
    let rgb = [];
    let population = [];
    let hsl = [];
    let hue = [];
    Object.values(palette).map((el, idx) => {
      population.push(el.population);
      rgb.push(el._rgb);
      hsl.push(
        chroma(`rgb(${el._rgb[0]}, ${el._rgb[1]}, ${el._rgb[2]})`).hsl()
      );
      hue.push(
        chroma(`rgb(${el._rgb[0]}, ${el._rgb[1]}, ${el._rgb[2]})`).hsl()[0]
      );
    });
    colours["label"] = label;
    colours["population"] = population;
    colours["rgb"] = rgb;
    colours["hsl"] = hsl;
    colours["hue"] = hue;
  });
  return colours;
};

export default function getColourObjects(links, labels) {
  return links.map((painting, idx) => {
    const img = new Vibrant(painting);
    const label = labels[idx];
    const result = getColourObject(img, label);
    return result;
  });
}
