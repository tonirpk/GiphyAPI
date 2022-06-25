import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppProvider from "./Components/AxiosGiphy";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

let theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#F73D93",
    },
    secondary: {
      main: "#205375",
    },
    background: {
      default: "#282f32",
      paper: "#ffffff",
    },
    text: {
      primary: "#374045",
    },
  },
});
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>
);
