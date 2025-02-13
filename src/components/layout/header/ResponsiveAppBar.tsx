import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { removeUserData } from "../../../services/localStorage/authUtils";
import { useAuthStore } from "../../../services/store/auth/authStore";
import { useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useThemeStore from "../../../services/store/theme/themeStore";
import companyLogo from "../../../assets/companyLogo.avif";
import { Stack } from "@mui/material";

const settings = ["Profile", "Logout"];

function ResponsiveAppBar() {
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
      <Container
        sx={{
          minWidth: "100%",
        }}
      >
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Box>
            <img
              src={companyLogo}
              style={{ height: "40px" }}
              alt={"Helpee"}
              loading="lazy"
            />
          </Box>

          <Stack direction={"row"}>
            <Box mr={2}>
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
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
}
export default ResponsiveAppBar;
