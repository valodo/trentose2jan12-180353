const getArea = require("./module/area");

test('Area del rettangolo con 2 input corretti interi positivi', () => {
    var input = [1, 1];
    expect(getArea(input)).toBe(1);
});

test('Area del rettangolo con 2 input corretti nulli', () => {
    var input = [0, 0];
    expect(getArea(input)).toBe(0);
});

test('Area del rettangolo con 2 input interi negativi', () => {
    var input = [-1, -1];
    expect(getArea(input)).toBe(-1);
});

test('Area del rettangolo con 3 input', () => {
    var input = [1, 2, 1];
    expect(getArea(input)).toBe(-1);
});

test('Area del rettangolo con 0 input', () => {
    var input = [];
    expect(getArea(input)).toBe(-1);
});