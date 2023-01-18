import operate from './operate';
describe('test for operate function', () => {
  it('should add numbers', () => {
    expect(operate(2, 1, '+')).toBe('3');
  });
  it('should add numbers', () => {
    expect(operate(11, 1, '-')).toBe('10');
  });
  it('should add numbers', () => {
    expect(operate(4, 4, 'x')).toBe('16');
  });
  it('should add numbers', () => {
    expect(operate(9, 2, '%')).toBe('1');
  });
  it('should add numbers', () => {
    expect(operate(20, 2, '÷')).toBe('10');
  });
});