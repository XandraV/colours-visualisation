import React from "react";
import * as Vibrant from "node-vibrant";
import chroma from "chroma-js";
import { sadList } from "./data";
import BubbleChart from "./BubbleChart";

function App() {
  function filterHSLColours(hslColours, borderHue1, borderHue2) {
    return hslColours.filter((el) => el[0] > borderHue1 && el[0] <= borderHue2);
  }

  function getRGBAndPopulation(hslList, data) {
    return data
      .map((el) => {
        let res = [];
        hslList.forEach((grp) => {
          const index = el.hue.indexOf(grp[0]);
          if (index > -1)
            res.push({ rgb: el.rgb[index], population: el.population[index] });
        });
        return res;
      })
      .flat();
  }

  const hues = sadList
    .map((el) => el.hue)
    .flat()
    .sort((a, b) => a - b);

  const hsls = sadList.map((el) => el.hsl).flat(1);

  const groupBorders = chroma.limits(hues, "e", 5);

  const group1HSL = filterHSLColours(hsls, groupBorders[0], groupBorders[1]);
  const group2HSL = filterHSLColours(hsls, groupBorders[1], groupBorders[2]);
  const group3HSL = filterHSLColours(hsls, groupBorders[2], groupBorders[3]);
  const group4HSL = filterHSLColours(hsls, groupBorders[3], groupBorders[4]);
  const group5HSL = filterHSLColours(hsls, groupBorders[4], groupBorders[5]);

  const group1RGB = getRGBAndPopulation(group1HSL, sadList);
  const group2RGB = getRGBAndPopulation(group2HSL, sadList);
  const group3RGB = getRGBAndPopulation(group3HSL, sadList);
  const group4RGB = getRGBAndPopulation(group4HSL, sadList);
  const group5RGB = getRGBAndPopulation(group5HSL, sadList);

   //Bubble data

  const colours = sadList[3].rgb;
  const population = sadList[3].population;
  console.log();

  const groupColours = group1RGB
    .concat(group2RGB, group3RGB, group4RGB, group5RGB)
    .map((g) => chroma(g.rgb).saturate(3).rgb());
  const groupPopulations = group1RGB
    .concat(group2RGB, group3RGB, group4RGB, group5RGB)
    .map((g) => g.population);

  const average = chroma.average(
    groupColours.map((c) => `rgb(${c[0]},${c[1]},${c[2]})`),
    "hsl"
  );

  return (
    <div className="App">
      <BubbleChart colours={groupColours} population={groupPopulations} />
      <svg>
        <circle key={1} cx={`50`} cy={`50`} r={`20`} fill={average} />
      </svg>
    </div>
  );
}

export default App;
