import { Input } from "@chakra-ui/react";
import React from "react";

const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column;
  return (
    <span>
      <Input
        bg="white"
        color={"black"}
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        // position={"absolute"}
        // mb="182px"
        // mr="60px"
        zIndex={1}
        // mb={"150px"}
      />
    </span>
  );
};

export default ColumnFilter;
