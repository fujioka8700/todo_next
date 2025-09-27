import sum from '../app/todo/sum';

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    // expect(テスト対象の関数).Matcher(期待する値)
    expect(sum(1, 2)).toBe(3);
  });

  it('adds negative numbers correctly', () => {
    expect(sum(-1, 5)).toBe(4);
  });
});
