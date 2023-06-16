import { Box, Typography, Button, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

import React from "react";

export default function SearchInput({
  name,
  placeholder,
  handleSearch,
  handleClear,
}) {
  return (
    <TextField
      sx={{ maxWidth: 720 }}
      name={name}
      placeholder={placeholder}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClear}>
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
