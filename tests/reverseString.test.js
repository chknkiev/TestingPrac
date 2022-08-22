
const reverseString = require('../scripts/reverseString');

test('reverse a string', () => {
  expect(reverseString('Hello World')).toBe('dlroW olleH');
});

test('reverse a string 2', () => {
  expect(reverseString('Howdy')).toBe('ydwoH');
});