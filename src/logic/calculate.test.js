import calculate from './calculate';

describe('testing calculate function', () => {
  test('should return total', () => {
    expect(calculate({ total: '20', next: 5, operation: '+' }, '=')).toEqual({
      total: '25',
      next: null,
      operation: null,
    });
    expect(calculate({ total: '20', next: 5, operation: '-' }, '=')).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
    expect(calculate({ total: '20', next: 5, operation: 'x' }, '=')).toEqual({
      total: '100',
      next: null,
      operation: null,
    });
    expect(calculate({ total: '20', next: 5, operation: '÷' }, '=')).toEqual({
      total: '4',
      next: null,
      operation: null,
    });
  });
  test('should return empty object', () => {
    expect(calculate({ total: '0', next: 5, operation: null }, '=')).toEqual(
      {},
    );
  });
  test('+/- button', () => {
    expect(
      calculate({ total: '10', next: '5', operation: null }, '+/-'),
    ).toEqual({
      total: '10',
      next: '-5',
      operation: null,
    });
    expect(
      calculate({ total: '15', next: null, operation: null }, '+/-'),
    ).toEqual({
      total: '-15',
      next: null,
      operation: null,
    });
  });
  test('for reset button', () => {
    expect(
      calculate({ total: '20', next: '10', operation: '+' }, 'AC'),
    ).toEqual({ total: null, next: null, operation: null });
  });
});
