import React from "react";
import { loveData } from "./loveData";
import { happyData } from "./happyData";
import { calmData } from "./calmData";
import BubbleCircleChart from "./BubbleCircleChart";
import BubbleLineChart from "./BubbleLineChart";
import getRGBData from "./getRGBData";

function App() {

  const happy = getRGBData(happyData);
  const happyGroupColours = happy[0];
  const happyGroupPopulation = happy[1];

  const love = getRGBData(loveData);
  const loveGroupColours = love[0];
  const loveGroupPopulation = love[1];

  const calm = getRGBData(calmData);
  const calmGroupColours = calm[0];
  const calmGroupPopulation = calm[1];

  const allMoods = loveData.concat(happyData, calmData);

  const sortedAllMoods = allMoods.sort(
    (a, b) => parseInt(a.month) - parseInt(b.month)
  );

  return (
    <div style={{ textAlign: "center", fontFamily: 'Libre Baskerville, serif' }}>
      <div>
        <span>
          <BubbleCircleChart
            size={300}
            colours={happyGroupColours}
            population={happyGroupPopulation}
            title={"Happy"}
          />
        </span>
        <span>
          <BubbleCircleChart
            size={300}
            colours={loveGroupColours}
            population={loveGroupPopulation}
            title={"Love"}
          />
        </span>
        <span>
          <BubbleCircleChart
            size={300}
            colours={calmGroupColours}
            population={calmGroupPopulation}
            title={"Calm"}
          />
        </span>
      </div>
      <div>
        <BubbleLineChart svgWidth={900} paintings={sortedAllMoods} />
      </div>
    </div>
  );
}

export default App;
