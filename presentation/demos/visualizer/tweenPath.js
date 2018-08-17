import {
  defer,
  interval,
  animationFrameScheduler,
  of
} from "rxjs"
import {
  map,
  takeWhile,
  concatMap,
  bufferCount,
  skipLast
} from "rxjs/operators"

const msElapsed = (scheduler = animationFrameScheduler) =>
  defer(() => {
    const start = scheduler.now();

    return interval(0, scheduler).pipe(
      map(() => scheduler.now() - start)
    );
  });


const forDuration = (ms, scheduler = animationFrameScheduler) =>
  msElapsed(scheduler).pipe(
    map(ems => ems / ms),
    takeWhile(t => t <= 1)
  );

const prevAndCurrent = () => (source$) =>
  source$.pipe(
    bufferCount(2, 1),
    skipLast(1)
  );

const quadInOut = (t) => {
  t /= 0.5
  if (t < 1) return 0.5 * t * t
  t--
  return -0.5 * (t * (t - 2) - 1)
}

const interpolateCoords = ({
    x: x1,
    y: y1
  }, {
    x: x2,
    y: y2
  }, t) =>
  ({
    x: x1 + ((x2 - x1) * t),
    y: y1 + ((y2 - y1) * t)
  });

const tweenPath = (easing) => (source$) =>
  source$
  .pipe(
    prevAndCurrent(),
    concatMap(([{
        coord: coord1
      }, {
        duration,
        coord: coord2
      }]) =>
      forDuration(duration).pipe(
        map(easing),
        map(t => interpolateCoords(coord1, coord2, t))
      )
    )
  );


export default tweenPath(quadInOut);