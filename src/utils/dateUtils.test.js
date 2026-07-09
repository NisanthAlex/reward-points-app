import { formatDate } from './dateUtils';

describe('formatDate', () => {
  test('formats date as Mon-DD-YYYY', () => {
    expect(formatDate('2024-01-15')).toBe('Jan-15-2024');
  });
});