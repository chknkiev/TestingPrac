const caesarCipher = require('../scripts/caesarCipher');

test('Cipher the string', () => {
  expect(caesarCipher('hello', 3)).toBe('khoor');
});

test('Decipher the code', () => {
  expect(caesarCipher('COBB')).toBe('FREE');
});

test('Cipher the string', () => {
  expect(caesarCipher('This is my Code')).toBe('Wklv lv pb Frgh');
});

test('Cipher the string', () => {
  expect(caesarCipher('Zebra')).toBe('Cheud');
});