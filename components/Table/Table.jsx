import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from "react-table";
import GlobalFilter from "./GlobalFilter";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Box, Button, Text } from "@chakra-ui/react";
const Table = ({ tableColumns, tableData }) => {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableData, []);
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    prepareRow,
    canNextPage,
    canPreviousPage,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;
  return (
    <div>
      <Box mr="5%" mt="-8.2%" float={"right"}>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </Box>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Box
        d="flex"
        justifyContent={"center"}
        alignItems={"center"}
        ml="46%"
        mt="10px"
      >
        <Button
          bg="white"
          fontSize={"20px"}
          fontWeight={500}
          disabled={!canPreviousPage}
          onClick={() => previousPage()}
        >
          <FiArrowLeft />
        </Button>
        <Button
          bg="white"
          ml="20px"
          fontSize={"20px"}
          fontWeight={500}
          disabled={!canNextPage}
          onClick={() => nextPage()}
        >
          <FiArrowRight />
        </Button>
      </Box>
      <style jsx>{`
        table {
          font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        table td,
        table th {
          border: 1px solid #ddd;
          padding: 8px;
        }
        tr {
          text-align: center;
        }

        table tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        table tr:hover {
          background-color: #ddd;
        }

        table th,
        tfoot td {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: center;
          background-color: #44d7a8;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Table;
