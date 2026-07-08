import transactions from '../../../data/transactions';

import { calculateRewardPoints } from '../../../utils/rewardCalculator';
import { sortTransactions } from '../../../utils/sortUtils';

/**
 * Fetch reward transactions.
 *
 * Simulates an asynchronous API request.
 *
 * @returns {Promise<Array>}
 */
export const fetchTransactions = async () => {
  try {
    const enrichedTransactions = transactions.map((transaction) => ({
      ...transaction,
      rewardPoints: calculateRewardPoints(transaction.price),
    }));

    return Promise.resolve(sortTransactions(enrichedTransactions));
  } catch (error) {
    return Promise.reject(error);
  }
};