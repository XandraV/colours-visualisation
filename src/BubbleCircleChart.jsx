import React, { useState } from "react";
import chroma from "chroma-js";
import ColourDrop from "./ColourDrop";
import styled from "styled-components/macro";

const BubbleWrapper = styled.div``;

const BubbleCircleChart = (props) => {
  const size = props.size;
  const population = props.population;
  const colours = props.colours.map(
    (c) => `rgba(${c[0]},${c[1]},${c[2]}, 0.8)`
  );

  const radius = size / 4;

  const average = chroma.average(
    props.colours.map((c) => `rgb(${c[0]},${c[1]},${c[2]})`),
    "hsl"
  );

  return (
    <BubbleWrapper>
      <svg
        width={size}
        height={size}
        style={{
          overflow: "visible",
          transform: "translate(" + size / 2 + "," + size / 2 + ")",
        }}
      >
        {population.map((p, i) => (
          <circle
            key={i}
            cx={`${
              size / 2 +
              radius *
                Math.cos((i * 2 * Math.PI) / population.length - Math.PI / 2)
            }`}
            cy={`${
              size / 2 +
              radius *
                Math.sin((i * 2 * Math.PI) / population.length - Math.PI / 2)
            }`}
            r={`${10 + p / 200}`}
            fill={colours[i]}
          />
        ))}
        <text
          key={"title"}
          x={size / 2} 
          y={size / 2}
          style={{
            fontSize: "2rem",
            textAnchor: "middle",
            fill: "grey",
          }}
        >
            {props.title}
        </text>
        <ColourDrop colour={average} />
      </svg>
    </BubbleWrapper>
  );
};

export default BubbleCircleChart;