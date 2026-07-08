import { render, screen } from '@testing-library/react';

import TransactionsTable from './TransactionsTable';

import { transactions } from '../../../tests/mockData';

describe('TransactionsTable', () => {
  test('renders transaction table', () => {
    render(
      <TransactionsTable
        transactions={transactions}
      />
    );

    expect(
      screen.getByText('Transactions')
    ).toBeInTheDocument();

    expect(
      screen.getByText('John Doe')
    ).toBeInTheDocument();

    expect(
      screen.getByText('Laptop')
    ).toBeInTheDocument();

    expect(
      screen.getByText('$120.00')
    ).toBeInTheDocument();
  });
});