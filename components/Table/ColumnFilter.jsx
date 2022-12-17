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
      />
    </span>
  );
};

export default ColumnFilter;
