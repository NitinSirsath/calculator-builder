import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useThemeStore from "../../../services/store/theme/themeStore";
import { removeUserData } from "../../../services/localStorage/authUtils";
import { useAuthStore } from "../../../services/store/auth/authStore";
import companyLogo from "../../../assets/companyLogo.avif";

const settings = ["Profile", "Logout"];

const ResponsiveAppBar = () => {
  const { setLoggedOut } = useAuthStore();
  const { darkMode, toggleDarkMode } = useThemeStore();
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    removeUserData();
    setLoggedOut();
    navigate("/login");
  };

  const handleCloseUserMenu = (action: string | null) => {
    if (action === "Logout") {
      handleLogout();
    }
    setAnchorElUser(null);
  };

  const handleThemeMode = () => {
    toggleDarkMode();
  };

  return (
    <AppBar position="static" sx={{ borderRadius: 0 }}>
      <Container sx={{ minWidth: "100%" }}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          {/* Company Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={companyLogo}
              style={{ height: "40px", cursor: "pointer" }}
              alt="Helpee"
              loading="lazy"
              onClick={() => navigate("/")}
            />
          </Box>

          {/* Navigation Links */}

          {/* Right Section (Dark Mode + User Menu) */}
          <Stack direction={"row"} spacing={2} alignItems="center">
            <Stack sx={{ marginLeft: "1rem" }} direction={"row"} spacing={1}>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/about")}>
                About Me
              </Button>
            </Stack>
            {/* Dark Mode Toggle */}
            <Tooltip
              enterDelay={500}
              leaveDelay={300}
              title={darkMode ? "Turn on light mode" : "Turn on dark mode"}
            >
              <IconButton
                onClick={handleThemeMode}
                color="inherit"
                sx={{ fontSize: "1.2rem" }}
              >
                {darkMode ? (
                  <DarkModeIcon fontSize="small" />
                ) : (
                  <LightModeIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>

            {/* User Avatar Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Profile"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={() => handleCloseUserMenu(null)}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography sx={{ textAlign: "center" }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
