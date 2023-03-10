import React from "react";
import { useStateContext } from "../../context/StateContext";
import { useRouter } from "next/router";
import {
  Box,
  Text,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import BookingInfo from "../../components/BookingInfo";
import { ErrorMessage } from "@hookform/error-message";
import { Controller, useFieldArray, useForm } from "react-hook-form";
const rates = () => {
  const { qoutesData, addQuoteRates } = useStateContext();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      test: [
        {
          charges: "",
          freight_type: "",
          currency: "",
          buy: "",
          sell: "",
          unit: "",
          tax: "",
        },
      ],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert, replace } =
    useFieldArray({
      control,
      name: "test",
    });
  const router = useRouter();
  const quoteId = router.query.qid;
  const currentQuote = qoutesData?.find((item) => item?.quote_id === quoteId);
  console.log(currentQuote, "nila");
  const onSubmit = (data) => {
    const payload = data;
    console.log(payload, "payload");
    const newItem = { ...currentQuote, quotes: payload };
    addQuoteRates(newItem, data);
    router.push(`/bookings/results?qid=${newItem.quote_id}`);
  };
  console.log(fields, "nihal");
  return (
    <Box>
      <Box float={"right"} mt="-80px">
        <BookingInfo booking={currentQuote} />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box ml="50px" mt="60px">
          <Box display={"flex"}>
            <Box>
              <Text>{currentQuote?.customer}</Text>
              <Text fontSize={"13px"} color={"gray"}>
                customer
              </Text>
            </Box>
            <Box>
              <Text ml="50px">{currentQuote?.type}</Text>
              <Text fontSize={"13px"} ml="50px" color={"gray"}>
                type
              </Text>
            </Box>
          </Box>

          <Box w="50%" mt="50px">
            <Box display={"flex"}>
              <FormControl
                isInvalid={Boolean(errors?.applies_to)}
                data-invalid={Boolean(errors?.applies_to)}
              >
                <FormLabel>Applies to</FormLabel>
                <Input
                  type={"text"}
                  w="300px"
                  {...register("applies_to", {
                    required: "applies_to is required",
                  })}
                  placeholder="select quote"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="applies_to" />
                </Text>{" "}
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.validity)}
                data-invalid={Boolean(errors?.validity)}
              >
                <FormLabel>Validity</FormLabel>
                <Input
                  type={"date"}
                  w="300px"
                  {...register("validity", {
                    required: "validity is required",
                  })}
                  placeholder="validity"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="validity" />
                </Text>{" "}
              </FormControl>
            </Box>
            <Box display={"flex"} mt="50px">
              <FormControl
                isInvalid={Boolean(errors?.liner)}
                data-invalid={Boolean(errors?.liner)}
              >
                <FormLabel>Liner</FormLabel>
                <Input
                  type={"text"}
                  w="300px"
                  {...register("liner", {
                    required: "liner is required",
                  })}
                  placeholder="liners"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="liner" />
                </Text>{" "}
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.total_transit)}
                data-invalid={Boolean(errors?.total_transit)}
              >
                <FormLabel ml="20px">Total Transit</FormLabel>
                <Input
                  type={"text"}
                  w="150px"
                  ml="20px"
                  {...register("total_transit", {
                    required: "total_transit is required",
                  })}
                  placeholder="days"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="total_transit" />
                </Text>{" "}
              </FormControl>
              <FormControl
                isInvalid={Boolean(errors?.free_days)}
                data-invalid={Boolean(errors?.free_days)}
              >
                <FormLabel>Free days</FormLabel>
                <Input
                  type={"text"}
                  w="150px"
                  {...register("free_days", {
                    required: "free_days is required",
                  })}
                  placeholder="days"
                />
                <Text color={"red"}>
                  <ErrorMessage errors={errors} name="free_days" />
                </Text>{" "}
              </FormControl>
            </Box>
          </Box>
          <Box mt="50px">
            <Text>Pricing</Text>
            <Text mt="30px" fontSize={"19px"} fontWeight={400}>
              1.Freight
            </Text>
            <Box
              mt="10px"
              w="98%"
              // justifyContent="space-between"
              // display={"flex"}
            >
              {fields.map((item, index) => {
                return (
                  <Box
                    justifyContent="space-around"
                    display={"flex"}
                    key={item.id}
                    mt="50px"
                  >
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.charges)}
                        data-invalid={Boolean(errors?.charges)}
                      >
                        <FormLabel color={"gray"} fontWeight={"normal"}>
                          Charges
                        </FormLabel>
                        <Input
                          type={"text"}
                          w="150px"
                          {...register("charges", {
                            required: "charges is required",
                          })}
                          placeholder="charges"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="charges" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.freight_type)}
                        data-invalid={Boolean(errors?.freight_type)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          Freight type
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("freight_type", {
                            required: "freight_type is required",
                          })}
                          placeholder="type"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="freight_type" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.currency)}
                        data-invalid={Boolean(errors?.currency)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          Currency
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("currency", {
                            required: "currency is required",
                          })}
                          placeholder="currency"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="currency" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.buy)}
                        data-invalid={Boolean(errors?.buy)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          Buy
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("buy", {
                            required: "buy is required",
                          })}
                          placeholder="buy"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="buy" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.sell)}
                        data-invalid={Boolean(errors?.sell)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          Sell
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("sell", {
                            required: "sell is required",
                          })}
                          placeholder="sell"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="sell" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.unit)}
                        data-invalid={Boolean(errors?.unit)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          unit
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("unit", {
                            required: "unit is required",
                          })}
                          placeholder="unit"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="unit" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isInvalid={Boolean(errors?.tax)}
                        data-invalid={Boolean(errors?.tax)}
                      >
                        <FormLabel
                          ml="20px"
                          color={"gray"}
                          fontWeight={"normal"}
                        >
                          partner tax
                        </FormLabel>
                        <Input
                          ml="20px"
                          type={"text"}
                          w="150px"
                          {...register("tax", {
                            required: "tax is required",
                          })}
                          placeholder="tax"
                        />
                        <Text color={"red"}>
                          <ErrorMessage errors={errors} name="tax" />
                        </Text>{" "}
                      </FormControl>
                    </Box>
                    <Button
                      ml="20px"
                      bg="white"
                      mt="10px"
                      color={"red"}
                      type="button"
                      onClick={() => remove(index)}
                    >
                      X
                    </Button>
                  </Box>
                );
              })}
            </Box>
            <Button
              mt="10px"
              mr="80px"
              float={"right"}
              type="button"
              bg="white"
              color={"blue.300"}
              onClick={() => {
                append();
              }}
            >
              + Add line item
            </Button>
            <Box ml="550px" mt="50px" mb="50px">
              <Button type="submit" bg="#4158d0" color={"white"}>
                Save & Proceed
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default rates;
