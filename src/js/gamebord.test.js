const { GameboardFactory } = require('./gameboard')


describe('Check Ship and HitSHip', () => {

    const testOneGameboard = GameboardFactory()
    testOneGameboard.placeShip([4, 10, 40, 10])

    test('Check ship', () => {

        expect(testOneGameboard.getShips()[0].getCords()).toEqual([4, 10, 40, 10])
    })


    test('Hit ship', () => {

        expect(testOneGameboard.receiveAttack(4)).toEqual(true)
    })

    test('Hit ship', () => {

        expect(testOneGameboard.receiveAttack(5)).toEqual(false)
    })

    test('Hit ship', () => {

        expect(testOneGameboard.receiveAttack(15)).toEqual(false)
    })

    test('Hit ship', () => {
        expect(testOneGameboard.receiveAttack(40)).toEqual(true)
    })


})



describe('Sink Ship GAMEBOARD TEST', () => {


    const board = GameboardFactory()
    board.placeShip([77, 78, 79])
    board.receiveAttack(77)
    board.receiveAttack(78)
    board.receiveAttack(79)

    test('Gamebord Recive Attack Test 1', () => {
        expect(board.sunkenShips()).toEqual(true)
    })

})


