import { getTimestamp } from './dateUtils';

/**
 * Returns transactions sorted by purchase date.
 */
export const sortTransactions = (transactions) =>
  [...transactions].sort(
    (firstTransaction, secondTransaction) =>
      getTimestamp(firstTransaction.purchaseDate) -
      getTimestamp(secondTransaction.purchaseDate)
  );