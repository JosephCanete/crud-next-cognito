import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import { useRouter } from "next/router";

const AccountActivationDialog = ({ open, onClose, email, setNotification }) => {
  const [verificationCode, setVerificationCode] = useState("");

  const handleActivate = () => {
    const cognitoUser = new CognitoUser({ Username: email, Pool: UserPool });

    cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
      if (err) {
        setNotification({
          open: true,
          message: "Invalid code, please try again.",
          type: "error",
        });
      } else {
        setNotification({
          open: true,
          message: "Account successfully confirmed!",
          type: "success",
        });
        // onClose();
        // return router.push("/login");
      }
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        A code has been sent to your email, please enter the code below:
      </DialogTitle>
      <DialogContent>
        <TextField
          label="Activation Code"
          value={verificationCode}
          onChange={(e) => setVerificationCode(e.target.value)}
          fullWidth
          autoFocus
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleActivate} color="primary" variant="contained">
          Activate
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AccountActivationDialog;
