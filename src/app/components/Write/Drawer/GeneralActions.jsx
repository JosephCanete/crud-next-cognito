import React from "react";
import { Button, Box, useTheme } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";

export default function GeneralActions({ label, selected }) {
  const theme = useTheme();

  const GeneralButton = ({ startIcon, children }) => (
    <Button
      variant="outlined"
      fullWidth
      sx={{
        justifyContent: "flex-start",
        pl: 3,
        gap: "15px",
        color: theme.palette.primary.main,
        height: "48px",
        borderColor: "transparent",
        borderRadius: "0 25px 25px 0",
        "&:hover": {
          borderColor: theme.palette.primary.main,
        },
      }}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        width: 300,
      }}
    >
      <GeneralButton startIcon={<LightbulbIcon />}>Notes</GeneralButton>
      <GeneralButton startIcon={<NotificationsActiveIcon />}>
        Reminder
      </GeneralButton>
      <GeneralButton startIcon={<EditIcon />}>Edit Labels</GeneralButton>
      <GeneralButton startIcon={<ArchiveIcon />}>Archive</GeneralButton>
      <GeneralButton startIcon={<DeleteIcon />}>Trash</GeneralButton>
    </Box>
  );
}
