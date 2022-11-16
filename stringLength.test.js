const stringLength = require('./stringLength.js')
test('length of hello is 5', () => {
    expect(stringLength('hello')).toBe(5);
});

test('string should be bigger than 0', () => {
    expect(() => stringLength('')).toThrow();
});

test('string should be less than 10', () => {
    expect(() => stringLength('hello world')).toThrow();
})