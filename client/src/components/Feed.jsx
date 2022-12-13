import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import SideBar from "./SideBar.jsx";
import Videos from "./Videos.jsx";
import { fetchFromApi } from "../utils/FetchApi.js";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log(selectedCategory);
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "100vh", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          variant="body2"
          className="copyright"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 Konnect{" "}
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          style={{ color: "white" }}
        >
          {selectedCategory}
          <span style={{ color: "#fc1503" }}>{` videos`}</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
