import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Feed from "./components/Feed.jsx";
import VideoDetails from "./components/VideoDetails.jsx";
import ChannelDetails from "./components/ChannelDetails.jsx";
import SearchFeed from "./components/SearchFeed.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000", color: "white" }}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" exact element={<VideoDetails />} />
            <Route path="/channel/:id" exact element={<ChannelDetails />} />
            <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
};

export default App;
