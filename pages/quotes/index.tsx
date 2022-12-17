import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import Table from "../../components/Table/Table";
import { COLUMNS } from "../../components/Table/BookingRequestColumns";
import { BookingRequestData } from "../../components/mock-data";
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
    <Box>
      <Box backgroundColor="gray.200" h="100vh">
        <Text fontSize={"25px"} ml="44px" mb="40px" p="25px">
          Quotes
        </Text>
        <Box w="90%" ml="5%">
          <Table tableColumns={COLUMNS} tableData={BookingRequestData} />
        </Box>
      </Box>
    </Box>
  );
}
