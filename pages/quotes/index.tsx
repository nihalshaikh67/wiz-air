import { useEffect, useState } from "react";
import { Box, Input, ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
// import { Column } from "react-table";
type UnitConversion = {
  fromUnit: string;
  toUnit: string;
  factor: number;
};
type BookingRequest = {
  quote_id: string;
  quote_requsted_on: string;
  origin: string;
  to: string;
  status: string;
  eta: string;
  requested_by: string;
};

const data: BookingRequest[] = [
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
  {
    quote_id: "DJNDBS",
    quote_requsted_on: "12 Nov",
    origin: "Chennai",
    to: "Pune",
    status: "Booking created",
    eta: "20 Nov",
    requested_by: "Admin",
  },
];

const columnHelper = createColumnHelper<BookingRequest>();

const columns = [
  columnHelper.accessor("quote_id", {
    cell: (info) => info.getValue(),
    header: "Quote ID",
  }),
  columnHelper.accessor("quote_requsted_on", {
    header: "Quote requested on",
    cell: (info) => {
      const rows = info.getValue();
      return <Box color="blue">{rows}</Box>;
    },
  }),
  columnHelper.accessor("origin", {
    cell: (info) => info.getValue(),
    header: "Origin",
  }),
  columnHelper.accessor("to", {
    cell: (info) => info.getValue(),
    header: "Destination",
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

export default function QuotesPage() {
  // const { control } = useForm();
  const [data1, setData] = useState(null);
  useEffect(() => {
    const fetchAPi = async () => {
      const endpoint = "/api/hello";
      const response = await fetch(endpoint);
      const jsonreps = await response.json();
      setData(jsonreps);
    };
    fetchAPi();
  }, []);

  console.log(data1, "tanu");
  return (
    <Box backgroundColor="gray.200" h="100vh">
      <Box>
        <Input></Input>
        <DataTable columns={columns} data={data} />
      </Box>
    </Box>
  );
}
