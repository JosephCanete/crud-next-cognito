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
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "middle",
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
    >
      <Alert
        severity={type}
        onClose={handleClose}
        sx={{
          "& .MuiAlert-icon": {
            fontSize: "34px",
          },
          fontWeight: 400,
          fontSize: "22px",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notification;
