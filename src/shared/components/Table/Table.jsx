import PropTypes from 'prop-types';

import './Table.css';

const Table = ({
  title,
  columns,
  data,
  rowKey,
}) => {
  return (
    <section>

      <h2>{title}</h2>

      <table>

        <thead>

          <tr>

            {columns.map((column) => (

              <th key={column.accessor}>
                {column.header}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.map((row) => (

            <tr key={row[rowKey]}>

              {columns.map((column) => (

                <td key={column.accessor}>

                  {column.render
                    ? column.render(row)
                    : row[column.accessor]}

                </td>

              ))}

            </tr>

          ))}

        </tbody>

      </table>

    </section>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  rowKey: PropTypes.string.isRequired,
};

export default Table;