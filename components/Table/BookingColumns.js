import { format } from "date-fns";
import { Box } from "@chakra-ui/react";
import ColumnFilter from "./ColumnFilter";
import Link from "next/link";

export const COLUMNS = [
  {
    Header: "BOOKING ID",
    accessor: "booking_id",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const booking_id = rowData.booking_id;
      return (
        <Link href={`/bookings/${booking_id}`}>
          <Box>{booking_id}</Box>
        </Link>
      );
    },
  },
  {
    Header: "BOOKING ON",
    accessor: "booking_on",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      const booking_on = format(new Date(rowData.booking_on), "dd/MM/yyyy");
      return <Box>{booking_on}</Box>;
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
      return <Box>{status}</Box>;
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
