import React, { useState } from "react";
import * as d3 from "d3";
import chroma from "chroma-js";
import styled from "styled-components/macro";
const months = [
  "January",
  "February",
  "March",
  "April",
  "June",
  "July",
  "September",
];
const monthSteps = [0, 1, 2.5, 5, 7.5, 9, 10.5];

const BubbleWrapper = styled.div`
  padding-left: 1rem;
`;

const BubbleLineChart = (props) => {
  const [hovered, setHovered] = useState("");
  const svgHeight = 230;
  const svgWidth = props.svgWidth;
  const xScale = d3
    .scaleLinear()
    .domain([0, props.paintings.length - 1])
    .range([0, svgWidth]);

  const yScale = d3
    .scaleLinear()
    .domain([0, 5])
    .range([svgHeight - 20, 0]);

  const getColour = (rgb) => {
    let satCol = chroma(rgb).saturate(1).rgb();
    return `rgba(${satCol[0]},${satCol[1]},${satCol[2]}, 0.9)`;
  };

  return (
    <BubbleWrapper>
      <svg width={svgWidth} height={svgHeight} style={{ overflow: "visible" }}>
        <path
          d={[
            "M",
            -30,
            svgHeight + 10,
            "h",
            0,
            "H",
            svgWidth + 30,
            "v",
            0,
          ].join(" ")}
          stroke="#e6e6e9"
          strokeWidth="0.1rem"
        />
        {xScale.ticks(props.paintings.length).map((value, idx) => {
          return (
            <g key={value}>
              <g
                key={value}
                transform={`translate(${xScale(value)},${svgHeight + 10})`}
              >
                <rect
                  width="81px"
                  height={300}
                  rx="5"
                  ry="5"
                  fill={hovered === idx ? "lightgrey" : "transparent"}
                  stroke={hovered === idx ? "white" : "transparent"}
                  strokeWidth={2}
                  opacity={0.5}
                  transform={`translate(-41,-270)`}
                  onMouseOver={() => setHovered(idx)}
                  onMouseLeave={() => setHovered("")}
                />
                <text
                  key={value}
                  fill={hovered === idx ? "grey" : "transparent"}
                  style={{
                    fontSize: "12px",
                    textAnchor: "middle",
                    transform: "translate(-28px, -114px) rotate(-90deg)",
                  }}
                >
                  {props.paintings[idx].category}
                </text>

                <line y1="-10" y2="5" stroke="#e6e6e9" />
                {/* draw vertical line before the first painting of each months */}
                {[0, 1, 3, 6, 8, 9].includes(idx) ? (
                  <line
                    x1={40}
                    x2={40}
                    y1={`${-svgHeight - 30}`}
                    y2="60"
                    stroke="#e6e6e9"
                  />
                ) : (
                  ""
                )}
                <text
                  key={value}
                  style={{
                    fontSize: "12px",
                    textAnchor: "middle",
                    transform: "translateY(20px)",
                    fill: "grey",
                  }}
                >
                  {props.paintings[idx].label}
                </text>
              </g>
            </g>
          );
        })}
        {monthSteps.map((step, idx) => (
          <g key={`${idx}-month`} transform={`translate(${step * 82},260)`}>
            <text
              key={`${idx}-month`}
              style={{
                fontWeight: 700,
                fontSize: "1rem",
                textAnchor: "middle",
                transform: "translateY(25px)",
                fill: "grey",
              }}
            >
              {months[idx]}
            </text>
          </g>
        ))}
        {props.paintings.map((p, i) => {
          console.log(p.category);
          return p.rgb.map((col, colIdx) => {
            return (
              <circle
                key={`painting-${i} rgb-${colIdx}`}
                cx={`${xScale(i)}`}
                cy={`${yScale(colIdx)}`}
                r={`${10 + p.population[colIdx] / 400}`}
                fill={getColour(col)}
              />
            );
          });
        })}
        ;
      </svg>
    </BubbleWrapper>
  );
};

export default BubbleLineChart;
