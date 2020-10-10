import React from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import styled from "styled-components/macro";

const BubbleWrapper = styled.div`
  padding-left: 1rem;
`;

const BubbleLineChart = (props) => {
  const svgHeight = 70;
  const svgWidth = props.svgWidth;
  const xScale = d3
    .scaleLinear()
    .domain([0, props.colours.length - 1])
    .range([0, svgWidth]);

  const colours = props.colours.map((c) => {
    let satCol = chroma(c).saturate(1).rgb();
    return `rgba(${satCol[0]},${satCol[1]},${satCol[2]}, 0.9)`;
  });
 
  return (
    <BubbleWrapper>
      <svg width={svgWidth} height={svgHeight} style={{ overflow: "visible" }}>
        <path
          d={["M", 0, 20, "h", 0, "H", svgWidth, "v", 0].join(" ")}
          stroke="#e6e6e9"
          strokeWidth="0.1rem"
        />
        {xScale.ticks(props.colours.length).map((value) => {
          return (
            <g key={value} transform={`translate(${xScale(value)},40)`}>
              <line y1="-10" y2="5" stroke="#e6e6e9" />
              <text
                key={value}
                style={{
                  fontSize: "10px",
                  textAnchor: "middle",
                  transform: "translateY(20px)",
                  fill: "grey",
                }}
              >
                {value}
              </text>
            </g>
          );
        })}
        {props.population.map((p, i) => {
          return (
            <circle
              key={i}
              cx={`${xScale(i)}`}
              cy={`20`}
              r={`${10 + p / 400}`}
              fill={colours[i]}
            />
          );
        })}
        ;
      </svg>
    </BubbleWrapper>
  );
};

export default BubbleLineChart;
