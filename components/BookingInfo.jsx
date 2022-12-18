import React from "react";
import { Box, Text, Stack } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { FcOk } from "react-icons/fc";
const BookingInfo = ({ booking }) => {
  return (
    // <Stack>
    <Box
      mt="40px"
      w="350px"
      ml="20px"
      height={"400px"}
      // border={"1px solid gray"}
      // backgroundColor="gray.300"
      boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.05)"
    >
      <Text fontSize={"25px"} mt="30px" mb="-10px" fontWeight={"500"} ml="30px">
        Booking Info
      </Text>
      <Box color={"gray.900"} mt="20px" ml="30px">
        <Text> Ref - #{booking?.quote_id}</Text>
      </Box>
      <Box
        ml="20px"
        mt="20px"
        w="170px"
        display="flex"
        justifyContent={"space-around"}
      >
        <Text>{booking?.origin}</Text>
        <Box mt="4px" as={FiArrowRight}></Box>
        <Text>{booking?.destination}</Text>
      </Box>
      <Box mt="20px" ml="30px">
        <Text fontSize={"12px"} color={"gray"}>
          Inco term
        </Text>
        <Box display={"flex"} mt="10px">
          {" "}
          <Box mt="5px">
            <FcOk fontSize={"12px"} />
          </Box>
          <Text ml="3px">{booking?.incoterm}</Text>
        </Box>
      </Box>
      <Box mt="20px" ml="30px">
        <Text fontSize={"12px"} color={"gray"}>
          HS Code
        </Text>
        <Box display={"flex"} mt="10px">
          {" "}
          <Box mt="5px">
            <FcOk fontSize={"12px"} />
          </Box>
          <Text ml="3px">{booking?.hscode}</Text>
        </Box>
      </Box>
      <Box mt="20px" ml="30px">
        <Text fontSize={"12px"} color={"gray"}>
          Service provided
        </Text>
        <Box display={"flex"} mt="10px">
          {" "}
          <Box mt="5px">
            <FcOk fontSize={"12px"} />
          </Box>
          <Text ml="3px">{booking?.type}</Text>
        </Box>
      </Box>
    </Box>
    // </Stack>
  );
};

export default BookingInfo;
