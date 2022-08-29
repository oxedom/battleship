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





    // test('Sunken Ships 1', () => {
    //     testTwoGameBoard.placeShip([4, 10, 40, 80])
    //     testTwoGameBoard.placeShip([9, 11, 33, 77])
    //     expect(testTwoGameBoard.sunkenShips()).toEqual(false)
    // })


    test.only('Sunken 2', () => {



        [4, 10, 40, 80].forEach(el => {
            testTwoGameBoard.receiveAttack(el)
        })
        [9, 11, 33, 77].forEach(el => {
            testTwoGameBoard.receiveAttack(el)
        })


    })

})

describe('Check Ship and HitSHip', () => {

    const testThreeGameBoard = GameboardFactory()


    testThreeGameBoard.placeShip([5, 10, 40, 89])
    testThreeGameBoard.placeShip([2, 6, 7, 8])


    test('Sunken Ships 1', () => {
        expect(testThreeGameBoard.sunkenShips()).toEqual(false)
    })

    [5, 10, 40, 89].forEach(el => {
        testThreeGameBoard.receiveAttack(el)
    })
    [2, 6, 7, 8].forEach(el => {
        testThreeGameBoard.receiveAttack(el)
    })

    test('Sunken 2', () => {

        expect(testThreeGameBoard.sunkenShips()).toEqual(true)


    }

    )

})


