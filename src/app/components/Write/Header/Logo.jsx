import DescriptionIcon from "@mui/icons-material/Description";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

export default function Logo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <IconButton>
        <DescriptionIcon fontSize="x" color="secondary" />
      </IconButton>
      <Typography variant="h5" fontWeight={400}>
        Write Care Share
      </Typography>
    </Box>
  );
}
