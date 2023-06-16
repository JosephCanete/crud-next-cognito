import React from "react";
import { Box } from "@mui/material";
import SearchInput from "./SearchInput";
import Hamburger from "./Hamburger";
import Actions from "./Actions";

export default function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Hamburger />
      <SearchInput placeholder={"Search Something..."} />
      <Actions />
    </Box>
  );
}
