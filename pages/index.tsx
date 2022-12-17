import * as React from "react";
import { Box, Button } from "@chakra-ui/react";
import useFetch from "../components/fetchAPI/useFetch";
export default function Home() {
  const [data] = useFetch("/api/bookings");
  console.log(data);

  const submitdata = async () => {
    let payload = {
      booking_id: "@#$%^&",
      booking_on: "2022-12-17T10:18:03.307Z",
      origin: "NIHAL",
      destination: "NIHAL",
      status: "Booking created",
      eta: "20 Nov",
      requested_by: "NIHAl",
    };
    const response = await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(response);
  };
  return (
    <Box>
      LANDING PAGE
      <Button onClick={() => submitdata()}></Button>
    </Box>
  );
}
