import { formatCurrency } from './currencyUtils';

describe('formatCurrency', () => {
  test('formats USD currency', () => {
    expect(formatCurrency(120)).toBe('$120.00');
  });
});