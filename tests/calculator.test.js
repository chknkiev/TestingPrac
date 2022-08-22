const calculator = require('../scripts/calculator');

test('add a and b', () => {
  expect(calculator(1, 2, '+')).toBe(3);
});

test('subtract b from a', () => {
  expect(calculator(5, 3, '-')).toBe(2);
});

test('multiply a and b', () => {
  expect(calculator(5, 5, '*')).toBe(25);
});

test('divide a and b', () => {
  expect(calculator(50, 10, '/')).toBe(5);
});
