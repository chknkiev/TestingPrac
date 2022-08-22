const capitalize = require('../scripts/capitalize');

test('capitalize first letter of string', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize first letter of string 2', () => {
  expect(capitalize('fooBar')).toBe('FooBar');
});