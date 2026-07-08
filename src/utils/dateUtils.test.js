import { formatDate } from './dateUtils';

describe('formatDate', () => {
  test('formats date', () => {
    expect(formatDate('2024-01-15')).toBe('1/15/2024');
  });
});