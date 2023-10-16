import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import PersonIcon from "@mui/icons-material/Person";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NavBar: React.FC = () => {
  const [value, setValue] = React.useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setValue(location.pathname.split("/")[1]);
  }, [location.pathname]);

  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: string
  ) => {
    navigate(`/${newValue}`);
  };
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          label="Actualités"
          value="feed"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction label="Chat" value="chat" icon={<ChatIcon />} />
        <BottomNavigationAction
          label="Profile"
          value="profile"
          icon={<PersonIcon />}
        />
        <BottomNavigationAction
          label="Settings"
          value="edit-profile"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;
