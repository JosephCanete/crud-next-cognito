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
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";

export default function TextArea({ handleCreateList, handleUploadPhoto }) {
  const [editMode, setEditMode] = useState(false);
  const handleOnFocus = () => setEditMode(true);
  const handleClose = () => setEditMode(false);

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
        mb: 1.5,
      }}
    >
      <TextField
        onFocus={handleOnFocus}
        placeholder={editMode ? "Title" : "Take a note..."}
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
      {editMode && (
        <>
          <TextField
            onFocus={handleOnFocus}
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
              <PersonAddAltOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <ColorLensOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <AddPhotoAlternateOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <ArchiveOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <MoreVertOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <UndoOutlinedIcon />
            </IconButton>
            <IconButton onClick={handleCreateList}>
              <RedoOutlinedIcon />
            </IconButton>
            <Button
              variant="outlined"
              sx={{
                marginLeft: "auto",
                border: "none",
                "&:hover": { border: "none" },
              }}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </>
      )}
    </Paper>
  );
}
