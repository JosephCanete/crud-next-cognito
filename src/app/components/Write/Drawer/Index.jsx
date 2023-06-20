import React from "react";
import GeneralActions from "./GeneralActions";
import { Box } from "@mui/material";

export default function Drawer() {
  return (
    <Box sx={{ flex: "1 1 10%" }}>
      <GeneralActions />
    </Box>
  );
}
