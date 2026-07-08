import { REWARD_RULES } from '../constants/rewardConstants';

const {
  FIRST_THRESHOLD,
  SECOND_THRESHOLD,
  FIRST_MULTIPLIER,
  SECOND_MULTIPLIER,
} = REWARD_RULES;

/**
 * Calculate reward points for a purchase.
 *
 * @param {number} purchaseAmount
 * @returns {number}
 */
export const calculateRewardPoints = (purchaseAmount) => {
  if (
    typeof purchaseAmount !== 'number' ||
    Number.isNaN(purchaseAmount) ||
    purchaseAmount <= FIRST_THRESHOLD
  ) {
    return 0;
  }

  const amount = Math.floor(purchaseAmount);

  if (amount <= SECOND_THRESHOLD) {
    return (amount - FIRST_THRESHOLD) * FIRST_MULTIPLIER;
  }

  return (
    (SECOND_THRESHOLD - FIRST_THRESHOLD) * FIRST_MULTIPLIER +
    (amount - SECOND_THRESHOLD) * SECOND_MULTIPLIER
  );
};