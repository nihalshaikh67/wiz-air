import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import { COLUMNS } from "../../components/Table/BookingColumns";
import { useStateContext } from "../../context/StateContext";
// import { BookingData } from "../../components/mock-data";

export default function Home() {
  const { bookingsData, AddBooking } = useStateContext();
  const [isSSR, setIsSSR] = React.useState(false);
  React.useEffect(() => {
    setIsSSR(true);
  }, []);

  React.useEffect(() => {
    localStorage.getItem("bookings");
  }, []);

  return (
    <Box>
      {isSSR && (
        <Box>
          <Text fontSize={"25px"} ml="44px" mb="40px" p="25px">
            Bookings
          </Text>
          <Box w="90%" ml="5%">
            {/* <DataTable columns={columns} data={data} /> */}
            <Table
              tableColumns={COLUMNS}
              tableData={bookingsData && bookingsData}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
}
