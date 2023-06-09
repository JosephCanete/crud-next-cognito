import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Notification = ({ open, message, type, onClose }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    onClose();
  };

  return (
    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
      <MuiAlert severity={type} onClose={handleClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Notification;
