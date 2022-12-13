import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";

const Videos = ({ videos, direction }) => {
  console.log(videos);
  if (!videos?.length) {
    return "Loading..";
  }
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
