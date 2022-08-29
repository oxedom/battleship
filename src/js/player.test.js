const { GameboardFactory } = require('./gameboard')
const { PlayerFactory } = require('./player')




describe('Player Attack ENEMY GAMEBOARD API', () => {

    const attacker = PlayerFactory()

    const enemyGameboard = GameboardFactory()
    const enemyShip = [6, 7, 8, 9]
    enemyGameboard.placeShip(enemyShip)

    attacker.attackEnemy(enemyGameboard, 1)
    attacker.attackEnemy(enemyGameboard, 3)
    attacker.attackEnemy(enemyGameboard, 4)
    test('Sunken Ships 1', () => {

        expect(enemyGameboard.sunkenShips()).toEqual(false)
    })

})

describe('Player Attack ENEMY GAMEBOARD API 2', () => {

    const attacker = PlayerFactory()

    const enemyGameboardTwo = GameboardFactory()
    const enemyShip2 = [6, 7, 8, 9]
    enemyGameboardTwo.placeShip(enemyShip2)

    attacker.attackEnemy(enemyGameboardTwo, 1)

    attacker.attackEnemy(enemyGameboardTwo, 6)
    attacker.attackEnemy(enemyGameboardTwo, 7)
    attacker.attackEnemy(enemyGameboardTwo, 8)
    attacker.attackEnemy(enemyGameboardTwo, 9)

    test('Sunken Ships 2', () => {

        expect(enemyGameboardTwo.sunkenShips()).toEqual(true)
    })

})
