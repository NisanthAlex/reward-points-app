import { MONTH_FORMAT } from '../constants/rewardConstants';

/**
 * Returns month and year.
 */
export const getMonthYear = (date) => {
  const parsedDate = new Date(date);

  return {
    month: parsedDate.toLocaleString(MONTH_FORMAT, {
      month: 'long',
    }),
    year: parsedDate.getFullYear(),
  };
};

/**
 * Converts date to timestamp.
 */
export const getTimestamp = (date) => new Date(date).getTime();

/**
 * Formats date for UI.
 */
export const formatDate = (date) =>
  new Intl.DateTimeFormat('en-US').format(new Date(date));