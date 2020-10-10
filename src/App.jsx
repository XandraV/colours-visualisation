import React from "react";
import { sadData } from "./sadData";
import BubbleCircleChart from "./BubbleCircleChart";
import BubbleLineChart from "./BubbleLineChart";
import getColourObjects from "./getData";
import getRGBData from "./getRGBData";

function App() {
  //   const mList = [
  //   "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/103478665_2972432299511895_7968360520928382486_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=103&_nc_ohc=9-KS84zpHuIAX_y1fvC&_nc_tp=15&oh=8fc3246480222978e7ac2395becd9d62&oe=5FAA83D7",
  //   "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/85186025_223195675378780_981447206204500726_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=104&_nc_ohc=AxZuXKQybN8AX8a_p9B&_nc_tp=15&oh=49d68f91f12cef4399ce25c7ee5a1527&oe=5FA83D48",
  //   "https://scontent-lhr8-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/87420304_2457378234526991_8448804233122272662_n.jpg?_nc_ht=scontent-lhr8-1.cdninstagram.com&_nc_cat=111&_nc_ohc=wNj2XSeabDEAX9U08wb&_nc_tp=15&oh=6e7af7827a18268c190a26222ddf60a5&oe=5FA9F54E",
  //   "https://scontent-lht6-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/82433509_2739131769504125_7161811541031103668_n.jpg?_nc_ht=scontent-lht6-1.cdninstagram.com&_nc_cat=105&_nc_ohc=Ccz3fMGnnuEAX-7ufm0&_nc_tp=15&oh=4d579e5cff86c202b67be8d0be932cfc&oe=5FA84503",
  // ];
  // const myLabels = ["sinking", "giving up", "drowning", "hopeless"];

  // const myres = getColourObjects(myList, myLabels)

  // load data for circular bubble chart
  const { groupColours, groupPopulations } = getRGBData(sadData);
  console.log(groupColours);
  console.log(groupPopulations);

  return (
    <div>
      <span style={{ float: "left" }}>
        {sadData.map((painting) => (
          <BubbleLineChart
            svgWidth={200}
            colours={painting.rgb}
            population={painting.population}
          />
        ))}
      </span>
      <span>
        <BubbleCircleChart
          size={300}
          colours={groupColours}
          population={groupPopulations}
          title={"mood"}
        />
      </span>
    </div>
  );
}

export default App;
