import React from "react";
import { useGlobalContext } from "./AxiosGiphy";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Avatar, ImageListItemBar, Typography } from "@mui/material";

const GifsList = () => {
  const { currentItems } = useGlobalContext();

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const laptop = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <ImageList
      variant="masonry"
      cols={4}
      gap={mobile ? 5 : tablet ? 10 : laptop ? 20 : 30}
    >
      {currentItems.map((el) => {
        return (
          <a href={el.images.fixed_height.url} target="_blank" rel="noreferrer">
            <ImageListItem
              sx={{
                width: "100%",
                borderRadius: 1,
                overflow: "hidden",
              }}
              key={el.id}
            >
              <img
                src={el.images.fixed_height.url}
                //   loading="lazy"
                alt={el.title}
              />
              <ImageListItemBar
                sx={{ bgcolor: "#F73D93", p: 1, alignItems: "center" }}
                position="below"
                subtitle={
                  <Typography color="#374045" variant="subtitle1">
                    @{el.user?.display_name}
                  </Typography>
                }
                actionIcon={
                  <Avatar
                    sx={{ border: "1px #374045 solid" }}
                    src={el.user?.avatar_url}
                  />
                }
              ></ImageListItemBar>
            </ImageListItem>
          </a>
        );
      })}
    </ImageList>
  );
};

export default GifsList;
