// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  // useBreakpointValue,
  useColorModeValue,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FiMenu } from "react-icons/fi";
// import { Logo } from "./Logo";
import { useRouter } from "next/router";
import Link from "next/link";
import { TbLetterW } from "react-icons/tb";
import { useStateContext } from "../context/StateContext";
const NavBar = () => {
  const { isLoggedin, setIsLoggedin } = useStateContext();
  console.log(isLoggedin, "log");
  const isDesktop = useMediaQuery("(min-width: 48em)");
  const router = useRouter();
  const showNavbar =
    router.asPath !== "/login" &&
    router.asPath !== "/signup" &&
    router.asPath !== "/" &&
    router.asPath !== "/signup";
  console.log(router.asPath);
  return (
    <Box as="section" pb={{ base: "12", md: "24" }}>
      <Box
        as="nav"
        bg="teal"
        height={"60px"}
        boxShadow={useColorModeValue("sm", "sm-dark")}
      >
        <Container py={{ base: "4", lg: "5" }}>
          <HStack spacing="10" justify="space-between">
            {/* <TbLetterW
              color="white"
              ml="20px"
              fontWeight={800}
              fontSize={"40px"}
            /> */}
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                {showNavbar ? (
                  <>
                    <ButtonGroup
                      variant="link"
                      spacing="8"
                      mt="12px"
                      d="flex"
                      // bg="black"
                      w="40%"
                      // float={"left"}
                      justifyContent={"space-between"}
                    >
                      <Link href="/bookings">
                        <Text mr="130px" color={"white"} key={"1"}>
                          {"Bookings"}
                        </Text>
                      </Link>
                      <Link href="/quotes">
                        <Text mr="130px" color={"white"} key={"2"}>
                          {"Quotes"}
                        </Text>
                      </Link>
                      <Link href="/reports">
                        <Text mr="630px" color={"white"} key={"3"}>
                          {"Report"}
                        </Text>
                      </Link>
                    </ButtonGroup>
                    <Link href={"/quotes/add"}>
                      <Text
                        mt="6px"
                        mr="90px"
                        color={"white"}
                        key={"3"}
                        p="5px"
                        border="1px solid white"
                      >
                        {" + Request a quote"}
                      </Text>
                    </Link>
                  </>
                ) : null}
                {isLoggedin ? (
                  <Button
                    border={"1px solid gray"}
                    color={"black"}
                    bg="white"
                    w="80px"
                    borderRadius={"10px"}
                    mr="22px"
                    variant="ghost"
                    onClick={() => {
                      setIsLoggedin(false);
                      localStorage.removeItem("token-info");
                      router.push("/");
                    }}
                  >
                    logout
                  </Button>
                ) : (
                  <HStack
                    spacing="3"
                    mt="20px"
                    color={"white"}
                    // visibility={"hidden"}
                    ml={showNavbar ? "" : "390%"}
                  >
                    <Link href={"/signup"}>
                      <Button
                        mr="22px"
                        border={"1px solid gray"}
                        color={"black"}
                        bg="white"
                        w="80px"
                        mt="-5px"
                        borderRadius={"10px"}
                        variant="ghost"
                      >
                        Sign in
                      </Button>
                    </Link>
                    <Link href={"/signup"}>
                      <Button mr="22px" visibility={"hidden"} variant="primary">
                        Sign up
                      </Button>
                    </Link>
                  </HStack>
                )}

                {/* logout */}
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
export default NavBar;
