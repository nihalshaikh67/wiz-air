import { Input } from "@chakra-ui/react";
import React from "react";

const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span>
      <Input
        w={"130%"}
        placeholder="Global Search"
        bg="white"
        value={filter || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      />
    </span>
  );
};

export default GlobalFilter;
