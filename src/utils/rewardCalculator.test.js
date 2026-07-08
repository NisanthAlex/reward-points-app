import { calculateRewardPoints } from './rewardCalculator';

describe('calculateRewardPoints', () => {
  test('returns 0 below $50', () => {
    expect(calculateRewardPoints(40)).toBe(0);
  });

  test('returns 0 for exactly $50', () => {
    expect(calculateRewardPoints(50)).toBe(0);
  });

  test('returns 20 for $70', () => {
    expect(calculateRewardPoints(70)).toBe(20);
  });

  test('returns 50 for $100', () => {
    expect(calculateRewardPoints(100)).toBe(50);
  });

  test('returns 90 for $120', () => {
    expect(calculateRewardPoints(120)).toBe(90);
  });

  test('handles decimal purchase 100.2', () => {
    expect(calculateRewardPoints(100.2)).toBe(50);
  });

  test('handles decimal purchase 100.9', () => {
    expect(calculateRewardPoints(100.9)).toBe(50);
  });

  test('returns 150 for $150', () => {
    expect(calculateRewardPoints(150)).toBe(150);
  });
});