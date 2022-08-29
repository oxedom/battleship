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

describe('Check Ship and HitSHip', () => {

    const testTwoGameBoard = GameboardFactory()

    let arr1 = [4, 10, 40, 89]
    let arr2 = [9, 11, 33, 77]
    testTwoGameBoard.placeShip(arr1)
    testTwoGameBoard.placeShip(arr2)


    test('Sunken Ships 1', () => {
        expect(testTwoGameBoard.sunkenShips()).toEqual(false)
    })


    test('Sunken 2', () => {

        arr1.forEach(el => {
            testTwoGameBoard.receiveAttack(el)
        })
        arr2.forEach(el => {
            testTwoGameBoard.receiveAttack(el)
        })


    })

})


