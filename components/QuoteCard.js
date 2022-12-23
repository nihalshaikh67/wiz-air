import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { FcInTransit } from "react-icons/fc";
import { useStateContext } from "../context/StateContext";
import { useRouter } from "next/router";
import Link from "next/link";
const QuoteCard = ({ quote, bookingRequest }) => {
  const router = useRouter();
  const { AddBooking } = useStateContext();
  const tax = (quote?.sell * quote?.tax) / 100;
  const onApprove = async () => {
    const result = Math.random().toString(36).substring(2, 7);
    const currentQuote = {
      ...bookingRequest,
      booking_id: result,
      booking_on: Math.floor(Date.now() / 1000),
      status: "Booking created",
      is_approved: true,
    };
    console.log(currentQuote);
    AddBooking(currentQuote);
  };

  return (
    <Box mt="50px" ml="50px" h={"150px"} w={"800px"} bg="#FAF9F6">
      <Box display={"flex"} justifyContent={"space-around"}>
        <Box mt="10px" display={"flex"}>
          <FcInTransit />
          <Text>{quote?.liner}</Text>
        </Box>
        <Box mt="10px">
          {quote?.total_transit}

          <Text fontSize={"14px"} color={"gray.500"}>
            total transit
          </Text>
        </Box>
        <Box mt="10px">
          {quote?.free_days}

          <Text fontSize={"14px"} color={"gray.500"}>
            Free days
          </Text>
        </Box>
        <Box mt="10px">
          {quote?.sell}

          <Text fontSize={"14px"}>
            {" "}
            + {quote?.currency}
            {tax} tax
          </Text>
        </Box>
      </Box>
      <Link href="/success">
        <Button
          bg={"teal"}
          color={"white"}
          mt="30px"
          ml="320px"
          onClick={() => onApprove()}
        >
          Approve & Book
        </Button>
      </Link>
    </Box>
  );
};

export default QuoteCard;
