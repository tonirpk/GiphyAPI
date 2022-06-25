import React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Alert
        variant="filled"
        severity="error"
        onClick={() => {
          window.location.reload();
        }}
      >
        <AlertTitle>Error</AlertTitle>
        Page can not load, <strong>please reload or click this alert!</strong>
      </Alert>
    </Box>
  );
};

export default ErrorPage;
