import React from "react";
import { Button, Box, useTheme } from "@mui/material";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
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
      <GeneralButton startIcon={<LightbulbOutlinedIcon />}>Notes</GeneralButton>
      <GeneralButton startIcon={<NotificationsNoneOutlinedIcon />}>
        Reminder
      </GeneralButton>
      <GeneralButton startIcon={<EditOutlinedIcon />}>
        Edit Labels
      </GeneralButton>
      <GeneralButton startIcon={<ArchiveOutlinedIcon />}>Archive</GeneralButton>
      <GeneralButton startIcon={<DeleteOutlinedIcon />}>Trash</GeneralButton>
    </Box>
  );
}
