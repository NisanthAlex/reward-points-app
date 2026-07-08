import { getMonthYear } from './dateUtils';

/**
 * Groups reward points by customer/month/year.
 */
export const groupRewardsByMonth = (transactions) =>
  Object.values(
    transactions.reduce((accumulator, transaction) => {
      const { month, year } = getMonthYear(transaction.purchaseDate);

      const key = `${transaction.customerId}-${month}-${year}`;

      if (!accumulator[key]) {
        accumulator[key] = {
          id: key,
          customerId: transaction.customerId,
          customerName: transaction.customerName,
          month,
          year,
          rewardPoints: 0,
        };
      }

      accumulator[key].rewardPoints += transaction.rewardPoints;

      return accumulator;
    }, {})
  );

/**
 * Groups total rewards by customer.
 */
export const groupTotalRewards = (transactions) =>
  Object.values(
    transactions.reduce((accumulator, transaction) => {
      if (!accumulator[transaction.customerId]) {
        accumulator[transaction.customerId] = {
          customerId: transaction.customerId,
          customerName: transaction.customerName,
          rewardPoints: 0,
        };
      }

      accumulator[transaction.customerId].rewardPoints +=
        transaction.rewardPoints;

      return accumulator;
    }, {})
  );