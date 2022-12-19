import { Box } from "@mui/system";
import Switch from "../../components/Switch";
import React from "react";

export default function ViewCats() {
  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Switch />
    </Box>
  );
}
