import { render, screen } from '@testing-library/react';
import Table from './Table';

const columns = [
  {
    header: 'Name',
    accessor: 'name',
  },
  {
    header: 'Age',
    accessor: 'age',
  },
];

const data = [
  {
    id: 1,
    name: 'John',
    age: 30,
  },
];

describe('Table', () => {
  test('renders headers', () => {
    render(
      <Table
        title="Users"
        columns={columns}
        data={data}
        rowKey="id"
      />
    );

    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();
  });

  test('renders rows', () => {
    render(
      <Table
        title="Users"
        columns={columns}
        data={data}
        rowKey="id"
      />
    );

    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('30')).toBeInTheDocument();
  });
});