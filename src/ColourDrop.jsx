import React from "react";

const ColourDrop = (props) => {
  return (
    <svg
      width={"100px"}
      height={"100px"}
      viewBox={`70 10 70 70`}
      style={{ overflow: "visible" }}
    >
      <g key={"average"} transform={`translate(240,150)`}>
        <path
          fill={props.colour}
          stroke={props.colour}
          strokeWidth="1.5"
          d="M15 3
               Q16.5 6.8 25 18
               A12.8 12.8 0 1 1 5 18
               Q13.5 6.8 15 3z"
        />
      </g>
    </svg>
  );
};

export default ColourDrop;