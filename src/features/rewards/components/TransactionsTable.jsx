
import PropTypes from 'prop-types';
import { transactionShape } from '../../../shared/propTypes/rewardPropTypes';

import Table from '../../../shared/components/Table/Table';
import { transactionColumns } from '../columns';

const TransactionsTable = ({ transactions }) => (
  <Table
    title="Transactions"
    columns={transactionColumns}
    data={transactions}
    rowKey="transactionId"
  />
);

TransactionsTable.propTypes = {
  transactions: PropTypes.arrayOf(transactionShape).isRequired,
};

export default TransactionsTable;