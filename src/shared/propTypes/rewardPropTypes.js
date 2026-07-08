import PropTypes from 'prop-types';

export const transactionShape = PropTypes.shape({
  transactionId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  customerId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  customerName: PropTypes.string.isRequired,

  purchaseDate: PropTypes.string.isRequired,

  product: PropTypes.string.isRequired,

  price: PropTypes.number.isRequired,

  rewardPoints: PropTypes.number.isRequired,
});

export const monthlyRewardShape = PropTypes.shape({
  customerId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  customerName: PropTypes.string.isRequired,

  month: PropTypes.string.isRequired,

  year: PropTypes.number.isRequired,

  rewardPoints: PropTypes.number.isRequired,
});

export const totalRewardShape = PropTypes.shape({
  customerId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

  customerName: PropTypes.string.isRequired,

  rewardPoints: PropTypes.number.isRequired,
});