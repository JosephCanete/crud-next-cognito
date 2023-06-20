import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Logo from "./Logo";
import { Box } from "@mui/material";

export default function Hamburger({ handleOnClick }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton>
        <MenuIcon onClick={handleOnClick} />
      </IconButton>
      <Logo />
    </Box>
  );
}
