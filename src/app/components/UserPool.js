import getConfig from "next/config";
import { CognitoUserPool } from "amazon-cognito-identity-js";

const { publicRuntimeConfig } = getConfig();
const { USER_POOL_ID, CLIENT_ID } = publicRuntimeConfig;

const poolData = {
  UserPoolId: USER_POOL_ID,
  ClientId: CLIENT_ID,
};

export default new CognitoUserPool(poolData);

// newPasswordRequired: (userAttributes, requiredAttributes) => {
//   setNotification({
//     open: true,
//     message: "Account password is temporary, please change it.",
//     type: "warning",
//   });
//   console.log("New password required for the user");

//   // Perform any necessary logic to set a new password
//   const newPassword = "!newPassword123"; // Set the new password here

//   user.completeNewPasswordChallenge(newPassword, null, {
//     onSuccess: (result) => {
//       console.log("New password set successfully");
//       // Perform any additional actions upon successful password change
//       // ...

//       setSubmitting(false);
//     },
//     onFailure: (error) => {
//       console.error("Failed to set new password:", error);
//       // Handle the failure case
//       // ...

//       setSubmitting(false);
//     },
//   });
// },
