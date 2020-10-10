import React, { useState } from "react";
import * as d3 from "d3";
import styled from "styled-components/macro";

const BubbleWrapper = styled.div`
  padding-top: 10rem;
  padding-left: 10rem;
`;

const BubbleChart = (props) => {
  const svgHeight = 300;
  const svgWidth = 680;
  const chartHeight = 260;
  const chartWidth = 660;
  const xScale = d3
    .scaleLinear()
    .domain([0, props.colours.length - 1])
    .range([0, chartWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, Math.max(...props.population)])
    .range([chartHeight, 0]);

  const colours = props.colours.map((c) => (
    `rgba(${c[0]},${c[1]},${c[2]}, 0.8)`
  ));
console.log(colours)
  return (
    <BubbleWrapper>
      <svg width={svgWidth} height={svgHeight} style={{ overflow: "visible" }}>
        <path
          d={["M", 5, 0, "h", 0, "H", 650, "v", 0].join(" ")}
          stroke="#e6e6e9"
          strokeWidth="0.1rem"
        />
        {xScale.ticks(props.colours.length).map((value) => {
          
            return (
              <g key={value} transform={`translate(${xScale(value)},70)`}>
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
        {props.population.map((bubble, i) => {
          return (
            <circle
              key={i}
              cx={`${xScale(i)}`}
              cy={`0`}
              r={`${10 + bubble / 100}`}
              fill={colours[i]}
            />
          );
        })}
      </svg>
    </BubbleWrapper>
  );
};

export default BubbleChart;
