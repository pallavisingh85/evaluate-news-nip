const nameChecker = require('./nameChecker.js');

test('checks if pal is present', () => {
  expect(nameChecker.checkForName('pal')).toBe(false);
});

test('checks if Picard is present', () => {
  expect(nameChecker.checkForName('Picard')).toBe(true);
});