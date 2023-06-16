import { createTheme } from "@mui/material/styles";

const grey = "#e8eaed";
const secondary = "#";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Customize the primary color
    },
    secondary: {
      main: "#fbbc04", // Customize the secondary color
    },

    background: {
      default: "#202124",
    },
    text: {
      primary: grey, // Set the primary font color
    },
    action: {
      active: grey, // Set the icon color
    },
    divider: grey,
  },
  typography: {
    fontFamily: "Quicksand", // Customize the default font family
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: grey, // Set the border color
            },
            "&:hover fieldset": {
              borderColor: grey, // Set the border color on hover
            },
            "&:focus-within .MuiOutlinedInput-root": {
              borderColor: grey, // Set the border color when focused
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            height: 0.5, // Adjust the height to make the Divider thinner
          },
        },
      },
    },
  },
});
