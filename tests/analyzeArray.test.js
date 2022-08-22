const analyzeArray = require('../scripts/analyzeArray');

test('Show array details', () => {
  expect(analyzeArray([8, 9, 6, 7, 5, 2, 3, 1, 4, 10])).toStrictEqual({"average": 5.5, "length": 10, "max": 10, "min": 1});
});

test('Show array details', () => {
  expect(analyzeArray([8, -1, 9, 6, 7, 5, 2, 3, 1, 4, 10])).toStrictEqual({"average": 4.9, "length": 11, "max": 10, "min": -1});
});