
const { GameboardFactory } = require('../factorys/gameboard')

test("Ship set cords ", () => {
  const gameboard = GameboardFactory()
  gameboard.placeShip([2, 3, 4])


  expect(gameboard.getShips().length).toEqual(1);
});

test("Ship set cords 2 ", () => {
  const gameboard = GameboardFactory()
  gameboard.placeShip([2, 3, 4])
  gameboard.placeShip([2, 5, 6])

  expect(gameboard.getShips().length).toEqual(1);
});

test("Ship set cords 3 ", () => {
  const gameboard = GameboardFactory()
  gameboard.placeShip([2, 3, 4])
  gameboard.placeShip([4, 5, 6])

  expect(gameboard.getShips().length).toEqual(1);
});


test("Ship set cords 4 ", () => {
  const gameboard = GameboardFactory()
  gameboard.placeShip([7, 8, 9])
  gameboard.placeShip([4, 5, 6])

  expect(gameboard.getShips().length).toEqual(2);
});

test("Random Attack ", () => {
  const gameboard = GameboardFactory()
  gameboard.placeShip([100])

  for (let index = 0; index < 99; index++) {
    console.log(index + 1);
    gameboard.receiveAttack(index + 1)

  }

  let answer = gameboard.randomAttack()


  expect(answer).toEqual({ answer: true, index: 100 });
});

// test("Random Attack ", () => {
//   const gameboard = GameboardFactory()
//   gameboard.placeShip([100])

//   for (let index = 0; index < 50; index++) {
//     console.log(index + 1);
//     gameboard.receiveAttack(index + 1)

//   }

//   let answer = gameboard.randomAttack()


//   expect(answer).toEqual({ answer: true, index: 50 });
// });
