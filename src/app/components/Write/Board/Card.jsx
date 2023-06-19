import React from "react";
import { Paper, Box } from "@mui/material";

export default function Card({ content }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        // display: "flex",
        // alignItems: "start",
        // width: "250px",
        background: "transparent",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        p: 1,
        height: "fit-content",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Box>{content}</Box>
    </Paper>
  );
}
