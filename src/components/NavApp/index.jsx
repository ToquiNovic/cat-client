import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavApp() {
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img src={logo} style={{ width: 50 }} alt="" srcset="" />
        </IconButton>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none" }}
        >
          MILU
        </Typography>

        <Button onClick={() => navigate("/login")}>Entrar</Button>
      </Toolbar>
    </AppBar>
  );
}
