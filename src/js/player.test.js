const { GameboardFactory } = require('./gameboard')
const { PlayerFactory } = require('./player')


const player = PlayerFactory()
const gameboard = GameboardFactory()
gameboard.placeShip([1, 2, 3, 4])
gameboard.placeShip([7, 8, 9])

player.attackEnemy(gameboard, 1)
player.attackEnemy(gameboard, 2)
player.attackEnemy(gameboard, 3)
player.attackEnemy(gameboard, 4)

player.attackEnemy(gameboard, 7)
player.attackEnemy(gameboard, 8)
player.attackEnemy(gameboard, 9)


test('Player attacking ships! 2 ', () => {
    expect(gameboard.sunkenShips()).toEqual(true)

})








