import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import { COLUMNS } from "../../components/Table/BookingColumns";
import { BookingData } from "../../components/mock-data";

export default function Home() {
  const [isSSR, setIsSSR] = React.useState(false);
  React.useEffect(() => {
    setIsSSR(true);
  });
  return (
    isSSR && (
      <Box>
        <Box backgroundColor="gray.200" h="100vh">
          <Text fontSize={"25px"} ml="44px" mb="40px" p="25px">
            Bookings
          </Text>
          <Box w="90%" ml="5%">
            {/* <DataTable columns={columns} data={data} /> */}
            <Table tableColumns={COLUMNS} tableData={BookingData} />
          </Box>
        </Box>
      </Box>
    )
  );
}
