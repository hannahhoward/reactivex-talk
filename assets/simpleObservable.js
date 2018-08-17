x.subscribe(nextX => console.log(nextX))

x.subscribe(nextX => console.log(nextX + 3))

y = "?";

x = [0, 9, 3, 10, 4]

y = x.map(nextX => nextX + 3)

x = Observable.of(0, 9, 3, 10, 4);

y = x.map(nextX => nextX + 3)