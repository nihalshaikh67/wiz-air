import { useRouter } from "next/router";
import React from "react";
import { useStateContext } from "../../context/StateContext";
import BookingInfo from "../../components/BookingInfo";
import { Box, Text, Stack, Flex } from "@chakra-ui/react";
import Link from "next/link";
const results = () => {
  const { qoutesData } = useStateContext();

  const router = useRouter();
  const quoteId = router.query.qid;
  const currentQuote = qoutesData?.find(
    (item: any) => item.quote_id === quoteId
  );
  console.log(currentQuote, "nila");
  return (
    <Flex>
      <Box>
        <BookingInfo booking={currentQuote} />
      </Box>
      <Box ml="20px" mt="50px">
        <Text fontSize={"17px"} color={"black.900"}>
          We have {currentQuote?.quotes?.length} quotes for this booking.
        </Text>
        <Link href={`/quotes/rates?qid=${quoteId}`}>
          <Text fontSize={"16px"} color={"teal"} mt="4px">
            {" "}
            Add a quote?
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default results;
