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
import { useRouter } from "next/router";
import React, { useId } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useStateContext } from "../../context/StateContext";
const QuotesAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { AddQuote } = useStateContext();
  // const id = useId();
  const result = Math.random().toString(36).substring(2, 7);

  const router = useRouter();

  console.log(errors, "error");
  const onSubmission = (data: any) => {
    // return;
    // data.id = id;
    data.quote_id = result;
    data.quote_requested_on = Math.floor(Date.now() / 1000);
    data.status = "+ Add quote";
    data.eta = "20 nov";
    data.requested_by = "Admin";
    data.quotes = [];
    console.log(data);
    AddQuote(data);
    router.push(`/bookings/results?qid=${data.quote_id}`);
  };
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      p="30px"
    >
      <Box w="500px">
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmission)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="0 0 50px 0 rgba(0, 0, 0, 0.05)"
            >
              <Text ml="150px" fontSize={"30px"}>
                Add a Quote
              </Text>
              <FormControl
                isInvalid={Boolean(errors?.customer)}
                data-invalid={Boolean(errors?.customer)}
              >
                <FormLabel>Customer</FormLabel>
                <Input
                  type="text"
                  // name="customer"
                  isInvalid={Boolean(errors?.customer)}
                  aria-invalid={errors.customer ? "true" : "false"}
                  {...register("customer", {
                    required: "customer name is required",
                  })}
                  placeholder="Customer"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="customer" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.type)}
                data-invalid={Boolean(errors?.type)}
              >
                <FormLabel>Type of booking</FormLabel>
                <Input
                  type="text"
                  {...register("type", {
                    required: "booking type is required",
                  })}
                  placeholder="Type of booking"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="type" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.origin)}
                data-invalid={Boolean(errors?.origin)}
              >
                <FormLabel>Origin</FormLabel>
                <Input
                  type={"text"}
                  {...register("origin", {
                    required: "origin is required",
                  })}
                  placeholder="origin"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="origin" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.destination)}
                data-invalid={Boolean(errors?.destination)}
              >
                <FormLabel>Destination</FormLabel>
                <Input
                  type={"text"}
                  {...register("destination", {
                    required: "destination is required",
                  })}
                  placeholder="Destination"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="destination" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.hscode)}
                data-invalid={Boolean(errors?.hscode)}
              >
                <FormLabel>HS Code</FormLabel>
                <Input
                  type={"text"}
                  {...register("hscode", {
                    required: "hs code is required",
                  })}
                  placeholder="HS code"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="hscode" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.incoterm)}
                data-invalid={Boolean(errors?.incoterm)}
              >
                <FormLabel>Incoterm</FormLabel>
                <Input
                  type={"text"}
                  {...register("incoterm", {
                    required: "incoterm is required",
                  })}
                  placeholder="Incoterm"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="incoterm" />
                </Text>
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.remarks)}
                data-invalid={Boolean(errors?.remarks)}
              >
                <FormLabel>Remarks</FormLabel>
                <Input
                  type={"text"}
                  {...register("remarks", {
                    required: "remark is required",
                  })}
                  placeholder="Commodity,prefferd routes"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="remarks" />
                </Text>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                _hover={{
                  color: "",
                }}
                variant="solid"
                bg="#4158d0"
                color={"white"}
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
