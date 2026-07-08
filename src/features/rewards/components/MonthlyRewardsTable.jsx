import PropTypes from 'prop-types';
import { monthlyRewardShape } from '../../../shared/propTypes/rewardPropTypes';
import Table from '../../../shared/components/Table/Table';
import { monthlyRewardColumns } from '../columns';

const MonthlyRewardsTable = ({ rewards }) => (
  <Table
    title="Monthly Rewards"
    columns={monthlyRewardColumns}
    data={rewards}
    rowKey="id"
  />
);

MonthlyRewardsTable.propTypes = {
  rewards: PropTypes.arrayOf(monthlyRewardShape).isRequired,
};

export default MonthlyRewardsTable;