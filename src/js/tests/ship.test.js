const { ShipFactory } = require("../ship");

test("test", () => {
  const testShip = ShipFactory()
  testShip.setLength(4)
  let answer = true





  expect(testShip.checkValid(1,2)).toEqual(answer)
})