import { Box } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import ViewListIcon from "@mui/icons-material/ViewList";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";

export default function Actions() {
  const CustomIconButton = ({ children }) => {
    return <IconButton>{children}</IconButton>;
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomIconButton>
        <RefreshIcon />
      </CustomIconButton>
      <CustomIconButton>
        <ViewListIcon />
      </CustomIconButton>
      <CustomIconButton>
        <SettingsIcon />
      </CustomIconButton>
      <CustomIconButton>
        <AccountCircleIcon />
      </CustomIconButton>
    </Box>
  );
}
