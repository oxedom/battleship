
const { GameboardFactory } = require('../gameboard')

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
