const { shipFactory } = require('./js/app')

const testShip = shipFactory()


test('Set Cords', () => {

    testShip.setCords([4, 10, 40, 10])
    expect(testShip.getCords()).toEqual([4, 10, 40, 10])
})
test('hitShip ', () => {
    expect(testShip.hitShip(4)).toBe(true)
})


