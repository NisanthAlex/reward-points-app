import { render, screen } from '@testing-library/react';
import MonthlyRewardsTable from './MonthlyRewardsTable';

const rewards = [
  {
    id: '1',
    customerId: 101,
    customerName: 'John Doe',
    month: 'January',
    year: 2024,
    rewardPoints: 90,
  },
];

describe('MonthlyRewardsTable', () => {
  test('renders monthly rewards table', () => {
    render(<MonthlyRewardsTable rewards={rewards} />);

    expect(screen.getByText('Monthly Rewards')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('January')).toBeInTheDocument();
    expect(screen.getByText('2024')).toBeInTheDocument();
    expect(screen.getByText('90')).toBeInTheDocument();
  });
});