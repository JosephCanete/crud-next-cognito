import React, { useState } from "react";
import { Box } from "@mui/material";
import Notification from "@/app/components/Notification";
import * as Yup from "yup";
import UserPool from "../UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import NewPasswordAssign from "../NewPasswordAssign";
import Loading from "../Loading";
import FormPane from "./FormPane";

const Login = () => {
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
        console.log({ responseFromLogin: data });
        // setTimeout(() => {
        //   router.push("/manage");
        // }, 500);
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

    setSubmitting(false);
  };

  const handleNotifOnClose = () => {
    setNotification((value) => ({ ...value, open: false }));
  };

  return (
    <>
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
      {loading && <Loading />}
      <>
        {!isTemporaryUser.temporary && (
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "95vh",
              }}
            >
              <FormPane
                initialValues={initialValues}
                validationSchema={validationSchema}
                handleSubmit={handleSubmit}
              />
            </Box>
          </Box>
        )}
      </>
    </>
  );
};

export default Login;
