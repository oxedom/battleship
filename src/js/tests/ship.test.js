const { ShipFactory } = require('../ship')

describe('SET CORDS + HIT SHIP, CLEARCOARDS', () => {
    const testShip = ShipFactory()
    testShip.setCords([4, 10, 40, 10])
    test('Set Cords', () => {

        expect(testShip.getCords()).toEqual([4, 10, 40, 10])
    })
    test('hitShip ', () => {

        expect(testShip.hitShip(4)).toBe(true)
    })

    test('Clear Cords', () => {
        testShip.clearCords()
        expect(testShip.getCords()).toEqual([])
    })

})
describe('SINK SHIP', () => {

    test('sinkShip', () => {
        const sinkShip = ShipFactory()
        sinkShip.setCords([5, 6, 7, 8])
        sinkShip.hitShip(5)
        sinkShip.hitShip(6)
        sinkShip.hitShip(7)
        sinkShip.hitShip(8)
        expect(sinkShip.getCords()).toEqual([5, 6, 7, 8])
        expect(sinkShip.isSunk()).toBe(true)
    })

    test('sinkShip 2', () => {
        const sinkShip = ShipFactory()
        sinkShip.setCords([5, 6, 7, 8])
        sinkShip.hitShip(5)
        sinkShip.hitShip(7)
        sinkShip.hitShip(8)

        expect(sinkShip.isSunk()).toBe(false)
    })
})



