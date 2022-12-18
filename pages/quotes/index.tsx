import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import { COLUMNS } from "../../components/Table/BookingRequestColumns";
import { BookingRequestData } from "../../components/mock-data";
import { useStateContext } from "../../context/StateContext";
export default function QuotesPage() {
  const { qoutesData } = useStateContext();
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => {
    localStorage.getItem("quotes");
    setIsSSR(true);
  }, []);

  return (
    <Box>
      {isSSR && (
        <Box>
          <Text fontSize={"25px"} ml="44px" mb="40px" p="25px">
            Quotes
          </Text>
          <Box w="90%" ml="5%">
            <Table tableColumns={COLUMNS} tableData={qoutesData} />
          </Box>
        </Box>
      )}
    </Box>
  );
}
