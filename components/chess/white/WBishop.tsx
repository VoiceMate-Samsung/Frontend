import React from "react";
import Svg, { G, Path } from "react-native-svg";

export const WBishop = ({
  width = 192,
  height = 192,
  color = "#000000",
  fillColor = "#e6e6e6",
}) => {
  return (
    <Svg viewBox="0 0 359.81 363.11" width={width} height={height}>
      <G id="Layer_2">
        <G id="Layer_1-2">
          <Path
            d="M38.44,326.61c35.52-10.16,105.94,4.51,141.47-21,35.52,25.46,105.94,10.79,141.47,21a83,83,0,0,1,31.44,21c-7.13,10.16-17.29,10.37-31.44,5.24-35.52-10.16-105.94,4.82-141.47-10.48-35.52,15.3-105.94.31-141.47,10.48-14.19,5.13-24.34,4.93-31.44-5.24C21.19,327.24,38.44,326.61,38.44,326.61Z"
            fill={fillColor}
            stroke={color}
            strokeLinejoin="round"
            strokeWidth="14"
          />
          <Path
            d="M101.31,284.69c26.2,26.2,131,26.2,157.18,0,4.77-14.31.2-33.55-8.29-45.73a60.7,60.7,0,0,0-17.91-17.14c57.63-15.72,62.87-120.51-52.39-162.42-115.27,41.92-110,146.71-52.39,162.42-.77-.21-3.85,2.67-4.39,3.1a67.55,67.55,0,0,0-10,9.49C102.2,247.2,95.91,268.48,101.31,284.69Z"
            fill={fillColor}
            stroke={color}
            strokeLinejoin="round"
            strokeWidth="14"
          />
          <Path
            d="M206.1,33.2A26.2,26.2,0,1,1,179.9,7,26.2,26.2,0,0,1,206.1,33.2Z"
            fill={fillColor}
            stroke={color}
            strokeLinejoin="round"
            strokeWidth="14"
          />
          <Path
            d="M127.51,221.82H232.3m-131,41.92H258.5M179.9,111.79v52.39M153.71,138H206.1"
            stroke={color}
            strokeLinecap="round"
            strokeWidth="14"
            fill="none"
          />
        </G>
      </G>
    </Svg>
  );
};
