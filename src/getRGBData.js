import chroma from "chroma-js";

function getAllHSLColours(paitings) {
  return paitings.map((el) => el.hsl).flat(1);
}

function getHues(paitings) {
  return paitings
    .map((el) => el.hue)
    .flat()
    .sort((a, b) => a - b);
}

// find possible borders for colour groups
function getColourGroupBorders(hues) {
  return chroma.limits(hues, "e", 5);
}

function getRGBAndPopulation(allHSLColours, data, borderHue1, borderHue2) {
  // returns a group of hsl colours between borderHue1 and borderHue2
  const hslGroup = allHSLColours.filter(
    (el) => el[0] > borderHue1 && el[0] <= borderHue2
  );
  return (
    data
      // loop through paitings list
      .map((el) => {
        let res = [];
        hslGroup.forEach((grp) => {
          // find the rgb equivalent of that hsl colour
          const index = el.hue.indexOf(grp[0]);
          if (index > -1)
            //return the rrgb colour and it's occurence = population
            res.push({
              rgb: el.rgb[index],
              population: el.population[index],
            });
        });
        return res;
      })
      .flat()
  );
}

export default function getRGBData(colourObjects) {
  const allHSLColours = getAllHSLColours(colourObjects);

  const hues = getHues(colourObjects);
  const groupBorders = getColourGroupBorders(hues);

  //  groupped colours
  const group1RGB = getRGBAndPopulation(
    allHSLColours,
    colourObjects,
    groupBorders[0],
    groupBorders[1]
  );
  const group2RGB = getRGBAndPopulation(
    allHSLColours,
    colourObjects,
    groupBorders[1],
    groupBorders[2]
  );
  const group3RGB = getRGBAndPopulation(
    allHSLColours,
    colourObjects,
    groupBorders[2],
    groupBorders[3]
  );
  const group4RGB = getRGBAndPopulation(
    allHSLColours,
    colourObjects,
    groupBorders[3],
    groupBorders[4]
  );
  const group5RGB = getRGBAndPopulation(
    allHSLColours,
    colourObjects,
    groupBorders[4],
    groupBorders[5]
  );

  // all colours for this mood
  const groupColours = group1RGB
    .concat(group2RGB, group3RGB, group4RGB, group5RGB)
    .map((g) => chroma(g.rgb).saturate(1).rgb());
  const groupPopulations = group1RGB
    .concat(group2RGB, group3RGB, group4RGB, group5RGB)
    .map((g) => g.population);

  return { groupColours, groupPopulations };
}
