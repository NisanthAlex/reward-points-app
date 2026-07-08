import { render, screen } from '@testing-library/react';
import TotalRewardsTable from './TotalRewardsTable';

const rewards = [
  {
    customerId: 101,
    customerName: 'John Doe',
    rewardPoints: 180,
  },
];

describe('TotalRewardsTable', () => {
  test('renders total rewards', () => {
    render(<TotalRewardsTable rewards={rewards} />);

    expect(screen.getByText('Total Rewards')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('180')).toBeInTheDocument();
  });
});