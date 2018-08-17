import React from "react";
import { withViewModel } from "@rxreact/core";
import observablePathEmitter from "./observablePathEmitter";
import colors from "../../slideTemplates/colors";

const SignalComponent = ({ signals }) => (
  <g>
    {signals.map(({ value: { value, index }, coord }) => {
      return (
        <text x={coord.x} y={coord.y} fill={colors.tertiary}>
          {`${value}`}
        </text>
      );
    })}
  </g>
);

const Signal = (source$, path) => {
  return withViewModel(
    {
      inputs: {
        signals: observablePathEmitter(source$, path)
      }
    },
    SignalComponent
  );
};

export default Signal;
