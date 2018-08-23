import React from "react";
import { withViewModel } from "@rxreact/core";
import observablePathEmitter from "./observablePathEmitter";
import colors from "../../slideTemplates/colors";
import styled from "styled-components";

export const SignalComponent = ({ signals, className }) => (
  <g>
    {signals.map(({ value: { value, index }, coord }) => {
      return (
        <text x={coord.x} y={coord.y} key={index} className={className}>
          {`${value}`}
        </text>
      );
    })}
  </g>
);

SignalComponent.defaultProps = {
  className: ""
};

export const Signalize = (source$, path) => {
  return withViewModel({
    inputs: {
      signals: observablePathEmitter(source$, path)
    }
  });
};

export default (source$, path) =>
  Signalize(source$, path)(styled(SignalComponent)`
    fill: ${colors.tertiary};
  `);
