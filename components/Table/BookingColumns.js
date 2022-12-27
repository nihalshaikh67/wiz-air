import { format } from "date-fns";
import { Box } from "@chakra-ui/react";
import ColumnFilter from "./ColumnFilter";
import Link from "next/link";
import { formatEpochToDate } from "../../utils/formatCurrency";
export const COLUMNS = [
  {
    Header: "BOOKING ID",
    accessor: "booking_id",
    Filter: ColumnFilter,
    Cell: (props) => {
      const rowData = props.row.original;
      console.log(rowData);
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
      const booking_on = rowData.booking_on;
      // console.log(booking_on);
      const booking_on1 = formatEpochToDate(booking_on);
      return <Box>{booking_on1}</Box>;
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
      const eta = formatEpochToDate(rowData.eta);
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

export const REPORT_COLUMS = [
  {
    Header: "Report",
    accessor: "report",
    Filter: ColumnFilter,
    Cell: (props) => {
      // const rowData = props.row.original;
      // console.log(rowData);
      // const booking_id = rowData.booking_id;
      return <Box>Wiz port Base dashboard</Box>;
    },
  },
  {
    Header: "Description",
    accessor: "description",
    Filter: ColumnFilter,
    Cell: (props) => {
      // const rowData = props.row.original;
      // console.log(rowData);
      // const booking_id = rowData.booking_id;
      return <Box>A report consisting of all the Ports.</Box>;
    },
  },
  {
    Header: "Created on",
    accessor: "created_on",
    Filter: ColumnFilter,
    Cell: (props) => {
      // const rowData = props.row.original;
      // console.log(rowData);
      // const booking_id = rowData.booking_id;
      return <Box>26 Dec 2022</Box>;
    },
  },
  {
    Header: "Created By",
    accessor: "created_by",
    Filter: ColumnFilter,
    Cell: (props) => {
      // const rowData = props.row.original;
      // console.log(rowData);
      // const booking_id = rowData.booking_id;
      return <Box>Jagadeesh D</Box>;
    },
  },
  {
    Header: "Action",
    accessor: "Viactionew",
    Filter: ColumnFilter,
    Cell: (props) => {
      // const rowData = props.row.original;
      // console.log(rowData);
      // const booking_id = rowData.booking_id;
      return <Box>View</Box>;
    },
  },
];
