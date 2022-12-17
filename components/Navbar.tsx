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
const NavBar = () => {
  const isDesktop = useMediaQuery("(min-width: 48em)");
  const router = useRouter();
  const user = false;
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
                      mt="20px"
                      d="flex"
                      // bg="black"
                      w="40%"
                      justifyContent={"space-between"}
                    >
                      <Link href="/bookings">
                        <Text ml="30px" color={"white"} key={"1"}>
                          {"Bookings"}
                        </Text>
                      </Link>
                      <Link href="/quotes">
                        <Text ml="30px" color={"white"} key={"2"}>
                          {"Quotes"}
                        </Text>
                      </Link>
                      <Link href="/reports">
                        <Text ml="30px" color={"white"} key={"3"}>
                          {"Report"}
                        </Text>
                      </Link>
                    </ButtonGroup>
                    <Link href={"/quotes/add"}>
                      <Text
                        mt="10px"
                        mr="60px"
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
                {router.asPath === "/" && !user && (
                  <HStack
                    spacing="3"
                    mt="20px"
                    color={"white"}
                    // visibility={"hidden"}
                    ml={showNavbar ? "" : "90%"}
                  >
                    <Link href={"/login"}>
                      <Button mr="22px" variant="ghost">
                        Sign in
                      </Button>
                    </Link>
                    <Link href={"/signup"}>
                      <Button mr="22px" variant="primary">
                        Sign up
                      </Button>
                    </Link>
                  </HStack>
                )}
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
