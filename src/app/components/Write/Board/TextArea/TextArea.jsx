import { useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Paper,
  Box,
  Button,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import ListIcon from "@mui/icons-material/List";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
export default function TextArea({ handleCreateList, handleUploadPhoto }) {
  const [editMode, setEditMode] = useState(false);

  const handleOnFocus = () => setEditMode(true);
  const handleOnBlur = () => setEditMode(false);
  console.log({ editMode });

  return (
    <Paper
      sx={{
        minWidth: 600,
        flexDirection: "column",
        backgroundColor: "transparent",
        border: "0.5px solid #e8eaed",
        p: 1,
        margin: "0 auto",
        borderRadius: "8px",
      }}
    >
      <TextField
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Take a note..."
        fullWidth
        variant="outlined"
        sx={{
          border: "transparent",
          alignItem: "center",
          justifyContent: "center",
          "& fieldset": {
            border: "none",
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
      <TextField
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        placeholder="Take a note..."
        fullWidth
        variant="outlined"
        multiline
        maxRows={4}
        sx={{
          border: "transparent",
          alignItem: "center",
          "& fieldset": {
            border: "none",
          },
          "& input::placeholder": {
            color: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            fontWeight: 500,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <IconButton onClick={handleCreateList}>
          <AddAlertOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <IconButton onClick={handleCreateList}>
          <ListIcon />
        </IconButton>
        <Button
          variant="outlined"
          sx={{
            marginLeft: "auto",
            border: "none",
            "&:hover": { border: "none" },
          }}
        >
          Close
        </Button>
      </Box>
    </Paper>
  );
}
