import { Box } from "@chakra-ui/react";
import ColumnFilter from "./ColumnFilter";
import Link from "next/link";
import { formatEpochToDate } from "../../utils/formatCurrency";
// quote_id: string;
// quote_requested_on: string;
// origin: string;
// destination: string;
// status: string;
// eta: string;
// requested_by: string;

export const COLUMNS = [
  {
    Header: "QUOTE ID",
    accessor: "quote_id",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const quote_id = rowData.quote_id;
      return (
        <Link href={`/quotes/${quote_id}`}>
          <Box>{quote_id}</Box>
        </Link>
      );
    },
  },
  {
    Header: "QUOTE REQUESTED ON",
    accessor: "quote_requested_on",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const quote_requested_on = formatEpochToDate(rowData.quote_requested_on);
      return (
        <Box
          onClick={() => {
            console.log(rowData, "datatatatatt");
          }}
        >
          {quote_requested_on}
        </Box>
      );
    },
  },
  {
    Header: "ORIGIN",
    accessor: "origin",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const origin = rowData.origin;
      return <Box>{origin}</Box>;
    },
  },
  {
    Header: "DESTINATION",
    accessor: "destination",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const destination = rowData.destination;
      return <Box>{destination}</Box>;
    },
  },
  {
    Header: "STATUS",
    accessor: "status",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const status = rowData.status;
      const disable = rowData.quotes.length;
      // console.log(rowData.quotes.length, "naihl");
      return (
        <Box pointerEvents={disable && "none"}>
          <Link href="/">
            <Box color={disable && "gray"}>
              {disable ? "view quote" : status}
            </Box>
          </Link>
        </Box>
      );
    },
  },
  {
    Header: "ETA",
    accessor: "eta",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const eta = rowData.eta;
      return <Box>{eta}</Box>;
    },
  },
  {
    Header: "REQUESTED BY",
    accessor: "requested_by",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const requested_by = rowData.requested_by;
      return <Box>{requested_by}</Box>;
    },
  },
];
