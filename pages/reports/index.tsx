import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import { COLUMNS, REPORT_COLUMS } from "../../components/Table/BookingColumns";
import { useStateContext } from "../../context/StateContext";
// import { BookingData } from "../../components/mock-data";
// import AccessAlarmIcon from "@mui/icons-mat÷erial/AccessAlarm";
export default function ReportPage() {
  const { bookingsData, AddBooking } = useStateContext();
  const [isSSR, setIsSSR] = React.useState(false);
  React.useEffect(() => {
    setIsSSR(true);
  }, []);

  React.useEffect(() => {
    localStorage.getItem("bookings");
  }, []);

  return (
    <Box className="">
      {isSSR && (
        <Box>
          <Text fontSize={"25px"} ml="44px" mb="40px" p="25px">
            Reports(1)
          </Text>
          <Box w="90%" ml="5%">
            {/* <DataTable columns={columns} data={data} /> */}
            <Table tableColumns={REPORT_COLUMS} tableData={[1]} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
