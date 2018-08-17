import {
  fromEvent,
  merge
} from "rxjs";
import {
  map,
  startWith,
  delay
} from "rxjs/operators";

const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");

const leftClick$ = fromEvent(leftButton, 'click')
const rightClick$ = fromEvent(rightButton, 'click')

const leftClickPosition$ = leftClick$.pipe(map(_ => "left"));
const rightClickPosition$ = rightClick$.pipe(map(_ => "right"));

const position$ = merge(leftClickPosition$, rightClickPosition$).pipe(
  startWith("left")
);