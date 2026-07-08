import { sortTransactions } from './sortUtils';

describe('sortTransactions', () => {
  test('sorts transactions by date', () => {
    const data = [
      { purchaseDate: '2024-03-01' },
      { purchaseDate: '2024-01-01' },
      { purchaseDate: '2024-02-01' },
    ];

    const sorted = sortTransactions(data);

    expect(sorted[0].purchaseDate).toBe('2024-01-01');
    expect(sorted[1].purchaseDate).toBe('2024-02-01');
    expect(sorted[2].purchaseDate).toBe('2024-03-01');
  });
});