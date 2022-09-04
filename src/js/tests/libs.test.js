const { XYtoIndex, checkLegalMove, getShipArray } = require('../libs')

test("ROW COLUMN 1", () => {
    const row = 5
    const column = 10
    const answer = 50



    expect(XYtoIndex(row, column)).toEqual(answer);
});


test("ROW COLUMN 2", () => {
    const row = 9
    const column = 1
    const answer = 81


    expect(XYtoIndex(row, column)).toEqual(answer);
});


test("ROW COLUMN 3", () => {
    const row = 7
    const column = 5
    const answer = 65


    expect(XYtoIndex(row, column)).toEqual(answer);
});


test("Check Legal 1 ", () => {

    const direction = 'row'
    const row = 2
    const column = 8
    const ship = 3
    const answer = true

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 2", () => {
    const direction = 'row'
    const row = 2
    const column = 8
    const ship = 4
    const answer = false


    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 3", () => {
    const direction = 'column'
    const row = 9
    const column = 4
    const ship = 3
    const answer = false



    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 4", () => {
    const direction = 'column'
    const row = 9
    const column = 4
    const ship = 1
    const answer = true

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 5", () => {
    const direction = 'column'
    const row = 7
    const column = 6
    const ship = 5
    const answer = false

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 6 ", () => {
    const direction = 'row'
    const row = 5
    const column = 4
    const ship = 5
    const answer = true

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 7 ", () => {
    const direction = 'row'
    const row = 9
    const column = 9
    const ship = 3
    const answer = false

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});

test("Check Legal 7 ", () => {
    const direction = 'column'
    const row = 1
    const column = 1
    const ship = 5
    const answer = true

    expect(checkLegalMove(row, column, ship, direction)).toEqual(answer);
});


test("SHIP ARRAY 1", () => {
    const direction = 'column'
    const cellID = 14
    const ship = 4
    const answer = [14, 24, 34, 44]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 2", () => {
    const direction = 'column'
    const cellID = 15
    const ship = 4
    const answer = [15, 25, 35, 45]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});


test("SHIP ARRAY 3", () => {
    const direction = 'column'
    const cellID = 1
    const ship = 3
    const answer = [1, 11, 21]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 4", () => {
    const direction = 'row'
    const cellID = 1
    const ship = 3
    const answer = [1, 2, 3]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 5", () => {
    const direction = 'row'
    const cellID = 74
    const ship = 2
    const answer = [74, 75]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 6", () => {
    const direction = 'row'
    const cellID = 3
    const ship = 2
    const answer = [3, 4]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 7", () => {
    const direction = 'row'
    const cellID = 44
    const ship = 1
    const answer = [44]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});

test("SHIP ARRAY 8", () => {
    const direction = 'row'
    const cellID = 3
    const ship = 7
    const answer = [3, 4, 5, 6, 7, 8, 9]

    expect(getShipArray(cellID, ship, direction)).toEqual(answer);
});