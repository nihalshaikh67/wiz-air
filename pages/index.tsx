import * as React from "react";
import { Box, Button } from "@chakra-ui/react";
import useFetch from "../components/fetchAPI/useFetch";
import { useStateContext } from "../context/StateContext";
import Header from ".././components/homepage/header";
import Howitwork from ".././components/homepage/Howitwork";
import About from ".././components/homepage/About";
import Agent from ".././components/homepage/Agent";
import Contact from ".././components/homepage/contact";
// import "../styles/index.module.css";
export default function Home() {
  // const [data] = useFetch("/api/bookings");
  // console.log(data);
  const { bookingsData } = useStateContext();
  console.log(bookingsData);
  return (
    <Box>
      <Header />
      <Howitwork />
      <About />
      <Agent />
      <Contact />
    </Box>
  );
}
