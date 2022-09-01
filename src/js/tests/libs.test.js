const { XYtoIndex, checkLegalMove } = require('../libs')

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