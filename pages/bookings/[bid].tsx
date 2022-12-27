import React from "react";
import {
  Box,
  List,
  ListIcon,
  ListItem,
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
import { MdCheckCircle, MdSettings } from "react-icons/md";
// import Multistep from "../../components/Multstep";
import VerticalLinearStepper from "../../components/verticalLineSteps";
import { StyledEngineProvider } from "@mui/material/styles";
import Progress from "../../components/Progress";
import BookingInfo from "../../components/BookingInfo";
const Booking = () => {
  const { bookingsData } = useStateContext();
  const [isSSR, setIsSSR] = React.useState(false);
  React.useEffect(() => {
    setIsSSR(true);
  }, []);
  const router = useRouter();
  const bid = router?.query?.bid;

  const booking = bookingsData?.find((item: any) => {
    return item.booking_id === bid;
  });
  console.log(booking);

  const arr = ["Booking created"];
  return (
    <Box>
      {isSSR ? (
        <StyledEngineProvider injectFirst>
          <Box h="70vh">
            <Box w="30%" h="50vh" float={"left"} bg="">
              {/* <Box mt="20px" display={"flex"} justifyContent={"space-around"}>
                <Text color={"gray"} fontSize={"14px"}>
                  {booking?.booking_id}
                </Text>
                <Box display={"flex"} justifyContent={"space-around"}>
                  <Text>{booking?.origin}</Text>
                  <Box mt="4px" as={FiArrowRight}></Box>
                  <Text mr="90px">{booking?.destination}</Text>
                </Box>
              </Box>
              <Text mt="5px" ml="85px" fontSize={"13px"}>
                {booking?.type}
              </Text>
              <Box mt="20px" display="flex">
                <Text ml="30px" color={"teal"}>
                  {booking?.customer}
                </Text>
                <Text ml="60px" color={"teal"}>
                  more
                </Text>
              </Box> */}
              <BookingInfo booking={booking} />
            </Box>

            <Box w="70%" h="50vh" float={"right"}>
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

          <Box
            // boxShadow={"0px 0px 10px 5px #E8E8E8"}
            w="90%"
            mt="-50px"
            ml="3%"
            mb="10px"
          >
            <Progress />
          </Box>
        </StyledEngineProvider>
      ) : null}
    </Box>
  );
};

export default Booking;
