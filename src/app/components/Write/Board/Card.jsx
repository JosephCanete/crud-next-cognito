import React, { useState } from "react";
import { Paper, Box, IconButton } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function Card({ content, keycardId }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState([]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleSelectedCards = () => {};

  return (
    <Paper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant="outlined"
      sx={{
        border: isHovered && "2px solid white",
        position: isHovered && "relative",
        background: "transparent",
        borderRadius: "8px",
        p: 1,
        height: "fit-content",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {isHovered && (
        <IconButton
          sx={{ position: "absolute", top: -25, left: -20 }}
          onClick={handleSelectedCards}
        >
          <CheckCircleIcon />
        </IconButton>
      )}
      <Box>{content}</Box>
    </Paper>
  );
}
