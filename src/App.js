import { Route, Routes } from "react-router-dom";
import HomePage from "./scenes/home";
import NewsPage from "./scenes/news";
import CryptoLearningPage from "./scenes/cryptolearning";
import CryptoCurrencyPage from "./scenes/cryptocurrencies";
import CryptoDetail from "./scenes/cryptodetail";
import { IoNotifications } from "react-icons/io5";
import React, { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { IoSchool } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import {
  alpha,
  CssBaseline,
  AppBar,
  IconButton,
  Box,
  Toolbar,
  Stack,
  SvgIcon,
  Drawer,
  Typography,
} from "@mui/material";
import logo2 from "./logo2.gif";
import { SideNavItem } from "./components/sidebaritem";
import { BiNews } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { Menu } from "@mui/icons-material";
import { styled } from "@mui/material";
const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  maxWidth: "100%",
  [theme.breakpoints.up("lg")]: {
    paddingLeft: drawerWidth,
  },
  paddingTop: "50px",
}));

const LayoutContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
});
const drawerWidth = 280;
const App = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const items = [
    {
      title: "Home",
      path: "/",
      icon: (
        <SvgIcon fontSize="small">
          <HiHome />
        </SvgIcon>
      ),
    },
    {
      title: "CryptoCurrencies",
      path: "/cryptocurrencies",
      icon: (
        <SvgIcon fontSize="small">
          <FaMoneyBillTrendUp />
        </SvgIcon>
      ),
    },
    {
      title: "Learn",
      path: "/learn",
      icon: (
        <SvgIcon fontSize="small">
          <IoSchool />
        </SvgIcon>
      ),
    },
    {
      title: "News",
      path: "/news",
      icon: (
        <SvgIcon fontSize="small">
          <BiNews />
        </SvgIcon>
      ),
    },
  ];

  const drawer = (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        px: 2,
        py: 3,
      }}
    >
      <Stack
        component="ul"
        spacing={3}
        sx={{
          listStyle: "none",
          p: 0,
          m: 0,
        }}
      >
        <img
          src={logo2}
          alt="Logo"
          style={{
            height: "80px",
            objectFit: "cover",
          }}
        />

        {items.map((item) => {
          return (
            <SideNavItem icon={item.icon} path={item.path} title={item.title} />
          );
        })}
      </Stack>
    </Box>
  );
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          backdropFilter: "blur(6px)",
          color: "black",
          backgroundColor: (theme) =>
            alpha(theme.palette.background.default, 0.8),
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <Menu />
          </IconButton>
          <Box sx={{ marginLeft: "auto" }}>
            <IconButton color="inherit">
              <IoNotifications />
            </IconButton>
            <IconButton color="inherit">
              <HiUserCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          PaperProps={{
            sx: {
              backgroundColor: "neutral.800",
              color: "common.white",
              minWidth: { drawerWidth },
              backdropFilter: "blur(6px)",
              display: { xs: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              backgroundColor: "neutral.800",
              color: "common.white",
              width: drawerWidth,
              display: { xs: "none", lg: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <LayoutRoot>
        <LayoutContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/cryptocurrencies" element={<CryptoCurrencyPage />} />
            <Route
              path="/cryptocurrencies/:coinId"
              element={<CryptoDetail />}
            />
            <Route path="/learn" element={<CryptoLearningPage />} />
          </Routes>
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

export default App;
