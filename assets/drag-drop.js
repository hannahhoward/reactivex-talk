import {
  paint,
  canvas
} from './canvas.js';

const moveObserver = (event) => {
  paint(event.clientX, event.clientY)
};

// canvas.addEventListener('mousemove', moveObserver)

canvas.addEventListener('mouseup', event => {
  canvas.addEventListener('mousemove', moveObserver);
});

canvas.addEventListener('mouseup', event => {
  canvas.removeEventListent('mouseup', moveObserver);
});