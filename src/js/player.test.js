const { GameboardFactory } = require('./gameboard')
const { PlayerFactory } = require('./player')

describe('Attacking ship INIT', () => {

    const player = PlayerFactory()
    const gameboard = GameboardFactory()
    gameboard.placeShip([1, 2, 3, 4])
    gameboard.placeShip([4, 5, 6])



    //SHIP ONE DOWN
    player.attackEnemy(gameboard, 1)
    player.attackEnemy(gameboard, 2)
    player.attackEnemy(gameboard, 3)
    player.attackEnemy(gameboard, 4)


    test('Player attacking ships! ', () => {
        expect(gameboard.sunkenShips()).toEqual(false)
    })


    //SHIP ONE DOWN
    player.attackEnemy(gameboard, 4)
    player.attackEnemy(gameboard, 5)
    player.attackEnemy(gameboard, 6)



    test('Player attacking ships! 2 ', () => {

        expect(gameboard.sunkenShips()).toEqual(true)
    })




})



