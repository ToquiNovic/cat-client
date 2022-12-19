import React from "react";
import { Box } from "@mui/material";
import NavApp from "../../components/NavApp";

export default function Landing() {
  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://img.freepik.com/fotos-premium/hermoso-gato-ojos-azules_58409-14525.jpg?w=2000)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
      }}
    >
      <NavApp />
    </Box>
  );
}
