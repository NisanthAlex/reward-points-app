import { formatDate } from '../../../utils/dateUtils';
import { formatCurrency } from '../../../utils/currencyUtils';

export const transactionColumns = [
  {
    header: 'Transaction ID',
    accessor: 'transactionId',
  },
  {
    header: 'Customer Name',
    accessor: 'customerName',
  },
  {
    header: 'Purchase Date',
    accessor: 'purchaseDate',
    render: ({ purchaseDate }) => formatDate(purchaseDate),
  },
  {
    header: 'Product Purchased',
    accessor: 'product',
  },
  {
    header: 'Price',
    accessor: 'price',
    align: 'right',
    render: ({ price }) => formatCurrency(price),
  },
  {
    header: 'Reward Points',
    accessor: 'rewardPoints',
    align: 'right',
  },
];