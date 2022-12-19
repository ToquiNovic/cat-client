import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Container, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import SignInSide from "./pages/SingInSide";
import Landing from "./pages/Landing";
import ViewCats from "./pages/ViewCats";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/cat" element={<ViewCats />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
