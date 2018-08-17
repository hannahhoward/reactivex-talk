import activeMap from "./activeMap";
import tweenPath from "./tweenPath";
import {
  from
} from "rxjs";
import {
  map
} from "rxjs/operators";

const observablePathEmitter = (source$, path) =>
  source$.pipe(
    activeMap((value) =>
      tweenPath(from(path)).pipe(
        map((coord) => ({
          value,
          coord
        }))
      )
    )
  );

export default observablePathEmitter;