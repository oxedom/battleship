const { ShipFactory } = require('../factorys/ship')

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


test("Attack Ship", () => {
    const aShip = ShipFactory()
    aShip.setLength(3)
    let cords = [13, 14, 15]
    aShip.setCords(cords)

    aShip.hitShip(10)
    aShip.hitShip(14)
    aShip.hitShip(15)

    expect(aShip.isSunk()).toEqual(false);
});

test("Attack Ship 2", () => {
    const aShip = ShipFactory()
    aShip.setLength(2)
    let cords = [10, 11]
    aShip.setCords(cords)

    aShip.hitShip(11)
    aShip.hitShip(10)

    expect(aShip.isSunk()).toEqual(true);
});

test("Attack Ship 3", () => {
    const aShip = ShipFactory()
    aShip.setLength(4)
    let cords = [44, 45, 46, 47]
    aShip.setCords(cords)


    aShip.hitShip(44)
    aShip.hitShip(45)
    aShip.hitShip(46)
    aShip.hitShip(47)

    expect(aShip.isSunk()).toEqual(true);
});

test("Attack Ship 4", () => {
    const aShip = ShipFactory()
    aShip.setLength(4)
    let cords = [44, 45, 46, 47]
    aShip.setCords(cords)
    aShip.hitShip(44)
    aShip.hitShip(46)
    aShip.hitShip(47)

    expect(aShip.isSunk()).toEqual(false);
});







