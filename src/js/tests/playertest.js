const { GameboardFactory } = require("../gameboard");
const { PlayerFactory, ComputerPlayerFactory } = require("../player");

test("Player attacking ships! 2 ", () => {
  const player = PlayerFactory();
  const gameboard = GameboardFactory();
  gameboard.placeShip([1, 2, 3, 4]);
  gameboard.placeShip([7, 8, 9]);

  player.attackEnemy(gameboard, 1);
  player.attackEnemy(gameboard, 2);
  player.attackEnemy(gameboard, 3);
  player.attackEnemy(gameboard, 4);

  player.attackEnemy(gameboard, 7);
  player.attackEnemy(gameboard, 8);
  player.attackEnemy(gameboard, 9);

  expect(gameboard.sunkenShips()).toEqual(true);
});

test("Player attacking ships! 2 ", () => {
  const player = PlayerFactory();
  const gameboard = GameboardFactory();
  gameboard.placeShip([3, 4]);
  gameboard.placeShip([10, 11, 12]);

  player.attackEnemy(gameboard, 3);
  player.attackEnemy(gameboard, 4);

  player.attackEnemy(gameboard, 10);
  player.attackEnemy(gameboard, 11);
  player.attackEnemy(gameboard, 12);

  expect(gameboard.sunkenShips()).toEqual(true);
});

//TEST BY INDEX
test("Computer 1-100", () => {
  let player = PlayerFactory();
  const playerGameBoard = GameboardFactory();

  for (let index = 0; index < 1; index++) {
    playerGameBoard.receiveAttack(index + 1);
  }

  let computer = ComputerPlayerFactory();
  computer.computerAttack(playerGameBoard);

  expect().toBe();
});
