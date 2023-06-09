import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "@mui/formik-material-ui";
import Notification from "@/app/components/Notification";
import { storeMyToken } from "@/app/helpers/localStorage";
import * as Yup from "yup";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const SetPassword = () => {
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string().required("Password is required"),
  });

  const handleSubmit = ({ email, password }, { setSubmitting }) => {};
  const handleNotifOnClose = () => {
    setNotification((value) => ({ ...value, open: false }));
  };

  return (
    <Container maxWidth="xs">
      <Notification
        open={notification.open}
        message={notification.message}
        type={notification.type}
        onClose={handleNotifOnClose}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Field
                component={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Field
                component={TextField}
                name="passwordConfirm"
                label="Password Confirm"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: 2 }}
              >
                Change Password
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default SetPassword;
