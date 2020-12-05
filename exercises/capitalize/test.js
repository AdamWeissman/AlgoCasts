const capitalize = require('./index');

test('Capitalize is a function', () => {
  expect(typeof capitalize).toEqual('function');
});

test('capitalizes the first letter of every word in a sentence', () => {
  expect(capitalize('hi there, how is it going?', 'everyWord')).toEqual(
    'Hi There, How Is It Going?'
  );
});

test('capitalizes the first letter', () => {
  expect(capitalize('i love breakfast at bill miller bbq', 'everyWord')).toEqual(
    'I Love Breakfast At Bill Miller Bbq'
  );
});

test('same as above except with a period', () => {
  expect(capitalize('hey, I wrote my own test. naiice', 'everyWord')).toEqual(
    'Hey, I Wrote My Own Test. Naiice'
  );
});

test('capitalizes first word in a sentence', () => {
  expect(capitalize('hey, I wrote my own test. naiice', 'onlySentence')).toEqual(
    'Hey, I wrote my own test. Naiice'
  );
});
