import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";
// import Multistep from "../../components/Multstep";
const Booking = () => {
  const { bookingsData } = useStateContext();
  const router = useRouter();
  const bid = router?.query?.bid;

  const booking = bookingsData?.find((item: any) => {
    return item.booking_id === bid;
  });
  console.log(booking);
  return (
    <Box>
      <Box w="30%" h="100vh" float={"left"} bg="" boxShadow={"lg"}>
        <Box mt="20px" display={"flex"} justifyContent={"space-around"}>
          <Text color={"gray"} fontSize={"14px"}>
            {booking?.booking_id}
          </Text>

          <Text>{booking?.origin}</Text>
          <Box mt="4px" as={FiArrowRight}></Box>
          <Text mr="90px">{booking?.destination}</Text>
        </Box>
        <Text mt="5px" ml="25px" fontSize={"13px"}>
          {booking?.type}
        </Text>
        <Box display={"flex"} justifyContent={"space-around"} mt="20px">
          <Text color={"teal"}>{booking?.customer}</Text>
          <Text color={"teal"}>more</Text>
        </Box>
      </Box>
      <Box w="70%" h="100vh" float={"right"}>
        <Tabs>
          <TabList>
            <Tab>Taks</Tab>
            <Tab ml="50px">Document</Tab>
            <Tab ml="50px">Booking Info</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>No Active tasks</p>
            </TabPanel>
            <TabPanel>
              <p>No Documents</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};

export default Booking;
