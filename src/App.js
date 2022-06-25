import { Box } from "@mui/material";
import React from "react";
import Giphy from "./Components/Giphy";

const App = () => {
  return (
    <Box sx={{ mx: { xs: 1, sm: 5, md: 10, lg: 20 } }}>
      <Giphy />
    </Box>
  );
};

export default App;
