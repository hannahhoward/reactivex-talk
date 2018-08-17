import {
  scan,
  mergeMap,
  map,
  materialize
} from 'rxjs/operators';

const activeMap = (mapFn) => (source) =>
  source.pipe(
    scan((acc, value) => ({
      value,
      index: acc.index + 1
    }), {
      index: -1
    }),
    mergeMap((value, index) =>
      mapFn(value).pipe(
        materialize(),
        map(notification => ({
          index,
          notification
        }))
      )
    ),
    scan((acc, {
      index,
      notification
    }) => {
      switch (notification.kind) {
        case "C":
          const newAcc = Object.assign({}, acc);
          delete newAcc[index];
          return newAcc;
        case "N":
          if (notification.hasValue === true) {
            return { ...acc,
              [index]: notification.value
            }
          }
        case "E":
          throw notification.error;
      }
    }, {}),
    map(active => Object.keys(active).map(key => active[key])),
  );

export default activeMap;