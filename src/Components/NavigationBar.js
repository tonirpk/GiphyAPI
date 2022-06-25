import React from "react";
import { useGlobalContext } from "./AxiosGiphy";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

const Search = styled("form")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const NavigationBar = () => {
  const { search, changeHandler, submitHandler, submitOnKeyPresshandler } =
    useGlobalContext();

  return (
    <AppBar elevation={0} sx={{ bgcolor: "#282f32" }} position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: " row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid alignItems="center" container spacing={2}>
          <Grid item xs={3}>
            <Typography sx={{ textAlign: "center" }} variant="h5">
              GIPHY
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Search>
              <InputBase
                sx={{ ml: 1, flex: 1, color: "inherit" }}
                type="text"
                onChange={changeHandler}
                value={search}
                placeholder="Search for a gif..."
                inputProps={{ "aria-label": "search" }}
                onKeyDown={submitOnKeyPresshandler}
              />

              <Divider
                sx={{ bgcolor: "#F73D93" }}
                orientation="vertical"
                variant="middle"
                flexItem
              />
              <IconButton
                color="primary"
                aria-label="Search for a gif"
                component="span"
                type="submit"
                onClick={submitHandler}
              >
                <SearchIcon sx={{ color: "white" }} />
              </IconButton>
            </Search>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
