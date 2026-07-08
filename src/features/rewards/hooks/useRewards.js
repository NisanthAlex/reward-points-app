import { useMemo } from 'react';

import {
  groupRewardsByMonth,
  groupTotalRewards,
} from '../../../utils/groupRewards';

/**
 * Prepare reward summaries.
 *
 * @param {Array} transactions
 */
export const useRewards = (transactions) => {
  const monthlyRewards = useMemo(
    () => groupRewardsByMonth(transactions),
    [transactions]
  );

  const totalRewards = useMemo(
    () => groupTotalRewards(transactions),
    [transactions]
  );

  return {
    monthlyRewards,
    totalRewards,
  };
};