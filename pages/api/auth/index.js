import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { CognitoUserPool, CognitoUser } from "amazon-cognito-identity-js";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { USER_POOL_ID, CLIENT_ID } = publicRuntimeConfig;
const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your authentication logic here
        // This function should authenticate the user with Cognito
        // and return user information if authentication is successful
        const userPool = new CognitoUserPool({
          UserPoolId: USER_POOL_ID,
          ClientId: CLIENT_ID,
        });
        const { username, password } = credentials;
        const authenticationData = {
          Username: username,
          Password: password,
        };
        const userData = {
          Username: username,
          Pool: userPool,
        };
        const cognitoUser = new CognitoUser(userData);
        const authenticationDetails = new AuthenticationDetails(
          authenticationData
        );

        return new Promise((resolve, reject) => {
          cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: (result) => {
              // Authentication success
              const user = {
                id: result.getIdToken().payload.sub,
                name: result.getIdToken().payload.name,
              };
              resolve(user);
            },
            onFailure: (err) => {
              // Authentication failure
              reject(new Error("Authentication failed"));
            },
          });
        });
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
