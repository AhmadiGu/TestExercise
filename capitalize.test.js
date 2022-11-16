const capitalize = require('./capitalize.js');

test('capitalize of hello is HELLO', () => {
  expect(capitalize("hello")).toBe('HELLO');
});

test('capitalize of world is WORLD', () => {
    expect(capitalize("world")).toBe('WORLD');
  });
