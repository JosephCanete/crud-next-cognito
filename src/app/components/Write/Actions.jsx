import { Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

export default function Actions() {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton>
        <RefreshIcon />
      </IconButton>
      <IconButton>
        <ViewListIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
      <IconButton>
        <AccountCircleIcon />
      </IconButton>
    </Box>
  );
}
