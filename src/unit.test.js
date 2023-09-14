const { sum1 } = require('./index.js')

test('adds 1 to value', () => {
    expect(sum1(2)).toBe(3);
  });