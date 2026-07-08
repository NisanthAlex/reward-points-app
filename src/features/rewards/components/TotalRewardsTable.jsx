import PropTypes from 'prop-types';
import { totalRewardShape } from '../../../shared/propTypes/rewardPropTypes';
import Table from '../../../shared/components/Table/Table';
import { totalRewardColumns } from '../columns';

const TotalRewardsTable = ({ rewards }) => (
  <Table
    title="Total Rewards"
    columns={totalRewardColumns}
    data={rewards}
    rowKey="customerId"
  />
);

TotalRewardsTable.propTypes = {
  rewards: PropTypes.arrayOf(totalRewardShape).isRequired,
};

export default TotalRewardsTable;