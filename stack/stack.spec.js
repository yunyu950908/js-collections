const { Stack } = require('./stack');

describe('stack.js', () => {
  const s = new Stack();

  test('Length of an empty stack should be 0', () => {
    expect(s.len()).toBe(0);
  });

  test('Length should be 1', () => {
    s.push(1);
    expect(s.len()).toBe(1);
  });

  test('Top item\'s Value should be 1', () => {
    expect(s.peek().Value).toBe(1);
  });

  test('Pop top item should return 1', () => {
    expect(s.pop()).toBe(1);
  });

  test('Stack should be empty', () => {
    expect(s.len()).toBe(0);
  });

  test('Length should be 2', () => {
    s.push(123);
    s.push(456);
    expect(s.len()).toBe(2);
  });

  test('Top item\'s Value should be 456', () => {
    expect(s.peek().Value).toBe(456);
  });
});
