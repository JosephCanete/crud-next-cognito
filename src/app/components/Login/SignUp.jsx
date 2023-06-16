import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";

export default function SignUp() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#40D09A",
      }}
    >
      <Typography variant="h2" fontWeight={600}>
        New Here?
      </Typography>
      <Typography variant="subtitle1" fontWeight={400}>
        Sign up and experience a innovated devotion system!
      </Typography>
    </Box>
  );
}
