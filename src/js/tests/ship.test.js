const { ShipFactory } = require('../ship')

test("Ship set cords ", () => {
    const myShip = ShipFactory()
    myShip.setLength(3)
    let cords = [1, 2, 3]
    myShip.setCords(cords)

    expect(myShip.getCords()).toEqual(cords);
});


test("Ship set cords ", () => {
    const myShip = ShipFactory()
    let cords = [13, 14, 15]
    myShip.setLength(3)
    myShip.setCords(cords)

    expect(myShip.getCords()).toEqual(cords);
});

test("Clear cords ", () => {
    const myShip = ShipFactory()
    let cords = [13, 14, 15]
    myShip.setLength(3)
    myShip.setCords(cords)
    myShip.clearCords()

    expect(myShip.getCords()).toEqual([]);
});





