import "babel-polyfill"
import {validateUrl} from './formHandler.js';

test('validating url', () => {
  expect(validateUrl('abcdefs')).toBe(false);
  expect(validateUrl('http://localhost:8080/aylien')).toBe(true);
});
