import React, { useState } from "react";
import { Box, Container, Typography, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import Notification from "@/app/components/Notification";
import * as Yup from "yup";
import AccountActivationDialog from "./AccountActivationDialog";
import { useRouter } from "next/router";
import UserPool from "./UserPool";

const Registration = () => {
  const router = useRouter();
  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [accountActivationDialog, setAccountActivationDialog] = useState(false);
  const [email, setEmail] = useState("");
  const initialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });

  const handleSubmit = ({ email, password }, { setSubmitting, resetForm }) => {
    console.log("reg invoked");
    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
        return setNotification({
          open: true,
          message: err.message,
          type: "error",
        });
      }
      setNotification({
        open: true,
        message: "User successfully registered!",
        type: "success",
      });
      resetForm();
      setAccountActivationDialog(true);
      setEmail(email);
    });
    setSubmitting(false);
  };

  const handleNotifOnClose = () => {
    setNotification((value) => ({ ...value, open: false }));
  };

  const handleCloseActivationDialog = () => setAccountActivationDialog(false);

  return (
    <Container maxWidth="xl">
      <Button
        variant="contained"
        color="secondary"
        size="small"
        onClick={() => router.push("/login")}
      >
        Back to Login
      </Button>

      <AccountActivationDialog
        open={accountActivationDialog}
        onClose={handleCloseActivationDialog}
        email={email}
        setNotification={setNotification}
      />
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
          Registration Form
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Field
                name="email"
                as={TextField}
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.email && touched.email}
                helperText={touched.email && errors.email}
              />

              <Field
                name="password"
                as={TextField}
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.password && touched.password}
                helperText={touched.password && errors.password}
              />

              <Field
                name="passwordConfirm"
                as={TextField}
                label="Password Confirm"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                error={!!errors.passwordConfirm && touched.passwordConfirm}
                helperText={touched.passwordConfirm && errors.passwordConfirm}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isSubmitting}
                sx={{ mt: 2 }}
              >
                Sign Up!
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Registration;
