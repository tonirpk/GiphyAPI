import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { useGlobalContext } from "./AxiosGiphy";

const PaginateComponent = () => {
  const { currentPage, itemsPerPage, data, pageSelectHandler } =
    useGlobalContext();

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <ButtonGroup
      sx={{ my: 3 }}
      variant="contained"
      aria-label="outlined primary button group"
    >
      {pageNumber.map((number) => {
        return (
          <Button
            key={number}
            onClick={() => pageSelectHandler(number)}
            variant={number === currentPage ? "contained" : "outlined"}
          >
            {number}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};

export default PaginateComponent;
