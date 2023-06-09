import { Box, Container, Typography, Button, TextField } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import UserPool from "./UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const NewPasswordAssign = ({
  temporaryUser,
  backToLoginForm,
  setNotification,
}) => {
  const initialValues = {
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object().shape({
    password: Yup.string().required("Password is required"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required"),
  });
  const handleSubmit = ({ passwordConfirm }, { setSubmitting, resetForm }) => {
    const { email, temporaryPassword } = temporaryUser;
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: temporaryPassword,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log(data);
      },
      onFailure: (error) => {
        console.error(error);
      },
      newPasswordRequired: () => {
        user.completeNewPasswordChallenge(passwordConfirm, null, {
          onSuccess: (result) => {
            setNotification({
              open: true,
              message: "User successfully changed password!",
              type: "success",
            });
            setSubmitting(false);
            resetForm();
            backToLoginForm((value) => ({ ...value, temporary: false }));
          },
          onFailure: (error) => {
            setNotification({
              open: true,
              message: "Something went wrong!",
              type: "error",
            });
            setSubmitting(false);
          },
        });

        // Perform any necessary logic to set a new password
      },
    });

    setSubmitting(false);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <Typography variant="h6">Please change your password.</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
              />
              <Field
                as={TextField}
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
                color="secondary"
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

export default NewPasswordAssign;
