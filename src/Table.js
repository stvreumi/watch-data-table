// reference: https://codesandbox.io/s/github/tannerlinsley/react-table/tree/master/examples/expanding
import { useTable, useExpanded, useGroupBy } from "react-table";

function Table({ columns: userColumns, data }) {
  // instance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { groupBy, expanded },
  } = useTable(
    {
      columns: userColumns,
      data,
      // only use to group date
      // https://github.com/tannerlinsley/react-table/blob/6600b275e34e49365119b9cbcba7f0a42c395a53/src/plugin-hooks/useGroupBy.js#L429
      groupByFn: (rows, columnId) =>
        rows.reduce((prev, row, i) => {
          // TODO: Might want to implement a key serializer here so
          // irregular column values can still be grouped if needed?
          const resKey = `${row.values[columnId]}`.slice(0, 8);
          prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
          prev[resKey].push(row);
          return prev;
        }, {}),
    },
    useGroupBy,
    useExpanded // Use the useExpanded plugin hook
  );
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.canGroupBy ? (
                    // If the column can be grouped, let's add a toggle
                    <span {...column.getGroupByToggleProps()}>
                      {column.isGrouped ? "🛑 " : "👊 "}
                    </span>
                  ) : null}
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        background: cell.isGrouped
                          ? "#0aff0082"
                          : cell.isAggregated
                          ? "#ffa50078"
                          : cell.isPlaceholder
                          ? "#ff000042"
                          : "white",
                      }}
                    >
                      {cell.isGrouped ? (
                        // If it's a grouped cell, add an expander and row count
                        <>
                          <span {...row.getToggleRowExpandedProps()}>
                            {row.isExpanded ? "👇" : "👉"}
                          </span>{" "}
                          {`${cell.value}`.slice(0,8)} ({row.subRows.length})
                        </>
                      ) : cell.isAggregated ? (
                        // If the cell is aggregated, use the Aggregated
                        // renderer for cell
                        cell.render("Aggregated")
                      ) : cell.isPlaceholder ? cell.render("Cell") : ( // For cells with same date, still print value
                        // Otherwise, just render the regular cell
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
    </>
  );
}

export default Table;
