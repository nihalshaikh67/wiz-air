import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const QuotesAdd = () => {
  return (
    <Box
      bg="gray.200"
      h="100vh"
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      p="30px"
      //       w="550px"
    >
      <Box w="500px">
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <Text ml="150px" fontSize={"30px"} mb="30px">
                Add a Quote
              </Text>
              <FormControl>
                <FormLabel>Customer</FormLabel>
                <Input type="text" placeholder="Customer" />
              </FormControl>
              <FormControl>
                <FormLabel>Type of booking</FormLabel>
                <Input type="text" placeholder="Type of booking" />
              </FormControl>
              <FormControl>
                <FormLabel>Origin</FormLabel>
                <Input type={"text"} placeholder="origin" />
              </FormControl>
              <FormControl>
                <FormLabel>Destination</FormLabel>
                <Input type={"text"} placeholder="Destination" />
              </FormControl>
              <FormControl>
                <FormLabel>HS Code</FormLabel>
                <Input type={"text"} placeholder="HS code" />
              </FormControl>
              <FormControl>
                <FormLabel>Remarks</FormLabel>
                <Input type={"text"} placeholder="Comoodity,prefferd routes" />
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Proceed
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default QuotesAdd;
