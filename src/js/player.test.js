const { GameboardFactory } = require('./gameboard')
const { PlayerFactory } = require('./player')


const player = PlayerFactory()
const gameboard = GameboardFactory()
gameboard.placeShip([1, 2, 3, 4])
gameboard.placeShip([4, 5, 6])



//SHIP ONE DOWN
player.attackEnemy(gameboard, 1)
player.attackEnemy(gameboard, 2)
player.attackEnemy(gameboard, 3)
player.attackEnemy(gameboard, 4)


test('Sunken Ships ', () => {
    expect(gameboard.sunkenShips()).toEqual(false)
})

player.attackEnemy(gameboard, 4)
player.attackEnemy(gameboard, 5)
player.attackEnemy(gameboard, 6)


test('Sunken Ships 2 ', () => {
    expect(gameboard.sunkenShips()).toEqual(true)
})
