import React from "react";
import Divider from "@mui/material/Divider";
import Header from "@/app/components/Write/Header/Index";
import Drawer from "@/app/components/Write/Drawer/Index";
import Board from "@/app/components/Write/Board/Index";

import { Box } from "@mui/material";

export default function write() {
  return (
    <>
      <Header light={true} />
      <Divider
        sx={{
          my: 1.25,
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          my: 1,
          height: "100vh",
        }}
      >
        <Drawer />
        <Board />
      </Box>
    </>
  );
}
