import React, { useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import Notification from "@/app/components/Notification";
import { useRouter } from "next/router";
import * as Yup from "yup";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import NewPasswordAssign from "./NewPasswordAssign";
import Loading from "./Loading";

const Login = () => {
  const router = useRouter();

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [isTemporaryUser, setTemporaryUser] = useState({
    temporary: false,
    email: "",
    temporaryPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async ({ email, password }, { setSubmitting }) => {
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        setLoading(true);
        setNotification({
          open: true,
          message: "Successfully logged in!",
          type: "success",
        });
        setTimeout(() => {
          router.push("/manage");
        }, 500);
      },
      onFailure: ({ message }) => {
        setNotification({
          open: true,
          message,
          type: "error",
        });
      },
      newPasswordRequired: () => {
        setNotification({
          open: true,
          message: "Account password is temporary, please change it.",
          type: "warning",
        });
        setTemporaryUser({
          temporary: true,
          email: email,
          temporaryPassword: password,
        });
      },
    });

    // try {
    //   await signIn("credentials", {
    //     username: email,
    //     password: password,
    //     redirect: false, // Prevent automatic redirection
    //   });
    //   // Authentication successful, optionally redirect to dashboard
    //   // router.push('/dashboard');
    //   console.log("User authenticated");
    // } catch (error) {
    //   // Handle authentication error
    //   console.error("Authentication failed", error);
    // }

    setSubmitting(false);
  };

  const handleNotifOnClose = () => {
    setNotification((value) => ({ ...value, open: false }));
  };

  const handleRegistration = () => {};

  return (
    <>
      {loading && <Loading />}
      <Container maxWidth="xs">
        <Notification
          open={notification.open}
          message={notification.message}
          type={notification.type}
          onClose={handleNotifOnClose}
        />
        {isTemporaryUser.temporary && (
          <NewPasswordAssign
            temporaryUser={isTemporaryUser}
            backToLoginForm={setTemporaryUser}
            setNotification={setNotification}
          />
        )}
        {!isTemporaryUser.temporary && (
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
                  <Box sx={{ display: "flex" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{ m: 1 }}
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => router.push("/register")}
                      type="submit"
                      variant="contained"
                      color="secondary"
                      fullWidth
                      disabled={isSubmitting}
                      sx={{ m: 1 }}
                    >
                      Register
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Login;
