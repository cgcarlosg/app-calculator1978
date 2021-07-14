import calculate from './calculate';

describe('Calculator', () => {
  it('add numbers', () => {
    const total = calculate({ total: '2', next: '3', operation: '+' }, '=');
    expect(total).toEqual({ total: null, next: '5', operation: null });
  });

  it('substract numbers', () => {
    const total = calculate({ total: '2', next: '3', operation: '−' }, '=');
    expect(total).toEqual({ total: null, next: '-1', operation: null });
  });

  it('divide numbers', () => {
    const total = calculate({ total: '4', next: '2', operation: '÷' }, '=');
    expect(total).toEqual({ total: null, next: '2', operation: null });
  });

  it('multiply numbers', () => {
    const total = calculate({ total: '2', next: '0', operation: '×' }, '=');
    expect(total).toEqual({ total: null, next: '0', operation: null });
  });

  it('divided by 0', () => {
    const total = calculate({ total: '2', next: '0', operation: '÷' }, '=');
    expect(total).toEqual({ total: 'Math Error', next: null, operation: null });
  });

  it('convert to negative', () => {
    const total = calculate({ total: null, next: '1', operation: null }, '±');
    expect(total).toEqual({ total: null, next: -1, operation: null });
  });

  it('convert to positive', () => {
    const total = calculate({ total: null, next: '-1', operation: null }, '±');
    expect(total).toEqual({ total: null, next: 1, operation: null });
  });

  it('change oposite operation (-)', () => {
    const total = calculate({ total: '1', next: null, operation: '−' }, '±');
    expect(total).toEqual({ total: '1', next: null, operation: '+' });
  });

  it('change oposite operation (+)', () => {
    const total = calculate({ total: '1', next: null, operation: '+' }, '±');
    expect(total).toEqual({ total: '1', next: null, operation: '−' });
  });

  it('convert to porcetage', () => {
    const total = calculate({ total: null, next: '10', operation: null }, '%');
    expect(total).toEqual({ total: null, next: '0.1', operation: null });
  });

  it('clear all', () => {
    const total = calculate({ total: '12', next: '10', operation: '+' }, 'AC');
    expect(total).toEqual({ total: null, next: null, operation: null });
  });

  it('concatanate numbers', () => {
    const total = calculate({ total: null, next: '10', operation: null }, '0');
    expect(total).toEqual({ total: null, next: '100', operation: null });
  });
});
