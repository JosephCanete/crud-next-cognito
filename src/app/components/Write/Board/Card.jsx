import React from "react";
import { Paper, Box } from "@mui/material";

export default function Card({ content }) {
  return (
    <Paper
      variant="outlined"
      sx={{
        flex: "1 1 auto",
        width: "250px",
        background: "transparent",
        borderRadius: "1rem",
        p: 1,
        m: 1,
      }}
    >
      <div style={{ height: "auto", overflow: "hidden" }}>
        {content}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore
        commodi consequuntur odit atque? Reprehenderit, eos quo est impedit
        architecto, mollitia aliquid, atque sit odio blanditiis harum minima
        magni! Molestias?
      </div>
    </Paper>
  );
}
