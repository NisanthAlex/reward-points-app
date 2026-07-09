import { MONTH_FORMAT } from '../constants/rewardConstants';
import { DEFAULT_LOCALE } from '../config/appConfig';
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
 * Example: Jan-08-2024
 */
export const formatDate = (date) => {
  const parsedDate = new Date(date);

  const month = parsedDate.toLocaleString(DEFAULT_LOCALE, {
    month: 'short',
  });

  const day = String(parsedDate.getDate()).padStart(2, '0');

  const year = parsedDate.getFullYear();

  return `${month}-${day}-${year}`;
};
