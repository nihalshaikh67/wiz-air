import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import { Column } from "react-table";
type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};
type Booking = {
  booking_id: string;
  booking_on: string;
  from: string;
  to: string;
  status: string;
  eta: string;
  requested_by: string;
};

const data: Booking[] = [
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    booking_id: "DJNDBS",
    booking_on: "12 Nov",
    from: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
];

const columnHelper = createColumnHelper<Booking>();

const columns = [
  columnHelper.accessor("booking_id", {
    cell: (info) => info.getValue(),
    header: "Booking ID",
  }),
  columnHelper.accessor("booking_on", {
    cell: (info) => info.getValue(),
    header: "Booking On",
  }),
  columnHelper.accessor("from", {
    cell: (info) => info.getValue(),
    header: "From",
  }),
  columnHelper.accessor("to", {
    cell: (info) => info.getValue(),
    header: "to",
  }),
  columnHelper.accessor("status", {
    cell: (info) => info.getValue(),
    header: "Status",
  }),
  columnHelper.accessor("eta", {
    cell: (info) => info.getValue(),
    header: "ETA",
  }),
  columnHelper.accessor("requested_by", {
    cell: (info) => info.getValue(),
    header: "Requested By",
  }),
];

export default function Home() {
  // const { control } = useForm();
  return (
    <Box backgroundColor="gray.200" h="100vh">
      <Box w="100%">
        <DataTable columns={columns} data={data} />
      </Box>
    </Box>
  );
}
