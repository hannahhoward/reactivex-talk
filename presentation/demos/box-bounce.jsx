import React from "react";
import posed from "react-pose";
import { withViewModel } from "@rxreact/core";
import { Subject, merge } from "rxjs";
import { map, startWith, delay } from "rxjs/operators";
import styled from "styled-components";
import asSlide from "../slideTemplates/as-slide";
import FullScreen from "../slideTemplates/full-screen";
import colors from "../slideTemplates/colors";
import Signal from "./visualizer/Signal";
import { Appear } from "spectacle";

const leftClick$ = new Subject();
const rightClick$ = new Subject();

const leftClickPosition$ = leftClick$.pipe(map(_ => "left"));

const rightClickPosition$ = rightClick$.pipe(map(_ => "right"));

const position$ = merge(leftClickPosition$, rightClickPosition$).pipe(
  startWith("left")
);

const Box = posed.div({
  left: { x: -100 },
  right: { x: 100 }
});

const RedBox = styled(Box)`
  width: 100px;
  height: 100px;
  background-color: ${colors.primary};
`;

const BoundBox = withViewModel(
  {
    inputs: {
      position: position$
    }
  },
  ({ position }) => <RedBox pose={position} />
);

const Button = styled.div`
  padding: 20px;
  background-color: ${colors.tertiary};
  text-align: center;
  cursor: pointer;
`;

const LeftButton = withViewModel(
  {
    outputs: {
      onClick: leftClick$
    }
  },
  ({ onClick }) => <Button onClick={onClick}>Go Left</Button>
);

const RightButton = withViewModel(
  {
    outputs: {
      onClick: rightClick$
    }
  },
  ({ onClick }) => <Button onClick={onClick}>Go Right</Button>
);

const Pen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 1;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-evenly;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
`;

const Panes = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: stretch;
`;

const LeftClickSignal = Signal(leftClick$.pipe(map(_ => "click!")), [
  {
    coord: {
      x: 110,
      y: 100
    }
  },
  {
    duration: 1000,
    coord: {
      x: 110,
      y: 250
    }
  }
]);

const RightClickSignal = Signal(rightClick$.pipe(map(_ => "click!")), [
  {
    coord: {
      x: 345,
      y: 100
    }
  },
  {
    duration: 1000,
    coord: {
      x: 345,
      y: 200
    }
  }
]);

const LeftPositionSignal = Signal(leftClickPosition$.pipe(delay(1000)), [
  {
    coord: {
      x: 110,
      y: 300
    }
  },
  {
    duration: 1000,
    coord: {
      x: 110,
      y: 400
    }
  }
]);

const RightPositionSignal = Signal(rightClickPosition$.pipe(delay(1000)), [
  {
    coord: {
      x: 345,
      y: 300
    }
  },
  {
    duration: 1000,
    coord: {
      x: 345,
      y: 400
    }
  }
]);

const PositionSignal = Signal(position$.pipe(delay(2000)), [
  {
    coord: {
      x: 237,
      y: 450
    }
  },
  {
    duration: 1000,
    coord: {
      x: 237,
      y: 550
    }
  }
]);

const BoxBounce = () => (
  <Panes>
    <Pen>
      <Row>
        <BoundBox />
      </Row>
      <Row>
        <LeftButton />
        <RightButton />
      </Row>
    </Pen>
    <Pen>
      <svg width="450px" height="600px">
        <Appear>
          <g>
            <rect x="0" y="0" width="200" height="100" fill={colors.tertiary} />
            <text fill={colors.secondary}>
              <tspan x="10" y="40">
                Left Button
              </tspan>
              <tspan x="10" y="80">
                Clicks
              </tspan>
            </text>
            <rect
              x="220"
              y="0"
              width="230"
              height="100"
              fill={colors.tertiary}
            />
            <text fill={colors.secondary}>
              <tspan x="230" y="40">
                Right Button
              </tspan>
              <tspan x="230" y="80">
                Clicks
              </tspan>
            </text>
            <line
              x1="100"
              y1="100"
              x2="100"
              y2="200"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <LeftClickSignal />
            <line
              x1="335"
              y1="100"
              x2="335"
              y2="200"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <RightClickSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <rect
              x="0"
              y="200"
              width="200"
              height="100"
              fill={colors.tertiary}
            />
            <text fill={colors.secondary}>
              <tspan x="10" y="240">
                Left Click
              </tspan>
              <tspan x="10" y="280">
                Position
              </tspan>
            </text>
            <rect
              x="220"
              y="200"
              width="230"
              height="100"
              fill={colors.tertiary}
            />
            <text fill={colors.secondary}>
              <tspan x="230" y="240">
                Right Click
              </tspan>
              <tspan x="230" y="280">
                Position
              </tspan>
            </text>
            <line
              x1="100"
              y1="300"
              x2="100"
              y2="400"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <LeftPositionSignal />
            <line
              x1="335"
              y1="300"
              x2="335"
              y2="400"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <RightPositionSignal />
          </g>
        </Appear>
        <Appear>
          <g>
            <rect
              x="115"
              y="350"
              width="205"
              height="100"
              fill={colors.tertiary}
            />
            <text fill={colors.secondary}>
              <tspan x="125" y="440">
                Position
              </tspan>
            </text>
            <line
              x1="100"
              y1="400"
              x2="115"
              y2="400"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <line
              x1="320"
              y1="400"
              x2="335"
              y2="400"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <line
              x1="227"
              y1="450"
              x2="227"
              y2="550"
              strokeWidth="2px"
              stroke={`${colors.primary}`}
            />
            <PositionSignal />
          </g>
        </Appear>
      </svg>
    </Pen>
  </Panes>
);

export default asSlide(() => (
  <FullScreen column>
    <BoxBounce />
  </FullScreen>
));
