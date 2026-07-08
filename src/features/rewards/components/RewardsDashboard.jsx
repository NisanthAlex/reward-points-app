import Header from '../../../shared/layouts/Header';
import MainLayout from '../../../shared/layouts/MainLayout';

import Loader from '../../../shared/components/Loader/Loader';
import ErrorMessage from '../../../shared/components/ErrorMessage/ErrorMessage';
import EmptyState from '../../../shared/components/EmptyState/EmptyState';

import { useTransactions } from '../hooks/useTransactions';
import { useRewards } from '../hooks/useRewards';

import TransactionsTable from './TransactionsTable';
import MonthlyRewardsTable from './MonthlyRewardsTable';
import TotalRewardsTable from './TotalRewardsTable';

import { APP_NAME } from '../../../config/appConfig';

const RewardsDashboard = () => {
  const {
    transactions,
    loading,
    error,
  } = useTransactions();

  const {
    monthlyRewards,
    totalRewards,
  } = useRewards(transactions);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message="Unable to load transactions." />;
  }

  if (!transactions.length) {
    return <EmptyState />;
  }

  return (
    <MainLayout>
      <Header title={APP_NAME} />

      <TransactionsTable transactions={transactions} />

      <MonthlyRewardsTable rewards={monthlyRewards} />

      <TotalRewardsTable rewards={totalRewards} />
    </MainLayout>
  );
};

export default RewardsDashboard;