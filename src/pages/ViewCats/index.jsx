import { Box } from "@mui/system";
import Switch from "../../components/Switch";
import React from "react";
import ReactPlayer from "react-player";

export default function ViewCats() {
  return (
    <div>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JYzkGe1G1RE"
          playing
          className="react-player"
          width={600}
          height={600}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JYzkGe1G1RE"
          playing
          className="react-player"
          width={600}
          height={600}
        />
      </Box>
      <Switch />
    </div>
  );
}
