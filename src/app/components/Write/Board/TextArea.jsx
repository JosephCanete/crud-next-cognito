import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Box,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListIcon from "@mui/icons-material/List";

export default function TextArea({ handleCreateList, handleUploadPhoto }) {
  return (
    <TextField
      placeholder="Take a note..."
      fullWidth
      variant="outlined"
      sx={{
        mr: 15,
        maxWidth: 500,
        alignSelf: "center",
        "& fieldset": {
          borderRadius: "1rem",
        },
        "& input::placeholder": {
          color: "white",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          fontWeight: 500,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleCreateList}>
              <ListIcon />
            </IconButton>
            <IconButton onClick={handleUploadPhoto}>
              <ImageIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
