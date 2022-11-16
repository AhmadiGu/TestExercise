const reverseString = require('./reverseString.js');

test('reverse of hello is olleh', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('reverse of Hello is olleh', () => {
    expect(reverseString('Hello')).toBe('olleh');
});
