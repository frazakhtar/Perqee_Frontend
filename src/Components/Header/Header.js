import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
  Badge,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../New_Logo.png";
import Navbar from "../NavBar/Navbar";

const Header = ({ setSearchQuery }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff", // Set white background so black icons are visible
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        "& *": {
          fontFamily: "'Poppins', Inter, system-ui, sans-serif",
        },
        zIndex: 1201,
      }}
    >
      {/* ================= MOBILE HEADER ================= */}
      <Toolbar
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Hamburger menu */}
        <IconButton
          edge="start"
          onClick={toggleDrawer(true)}
          sx={{ display: { xs: "flex", md: "none" }, color: "black" }} // Black color
        >
          <MenuIcon />
        </IconButton>

        {/* Center Logo */}
        <Box
          component="img"
          src={Logo}
          alt="Logo"
          sx={{
            height: 40,
            mx: "auto",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />

        {/* Cart icon on mobile */}
        <IconButton
          component={Link}
          to="/cart"
          sx={{ color: "black", display: { xs: "flex", md: "none" } }} // Black color
        >
          <Badge badgeContent={3} color="error">
            <ShoppingCartTwoToneIcon />
          </Badge>
        </IconButton>
      </Toolbar>

      {/* ================= DESKTOP HEADER ================= */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <Toolbar>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{ height: 40, cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
          <Typography
            variant="h6"
            sx={{ color: "#7e7a7aff", fontWeight: 700, flexGrow: 1, ml: 2 }}
          >
            Perqee.in
          </Typography>

          {/* Search Box */}
          <TextField
            placeholder="Search brands or category"
            size="small"
            variant="outlined"
            sx={{
              width: 280,
              backgroundColor: "#fff",
              borderRadius: "999px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "999px",
                paddingRight: "8px",
              },
              mr: 4,
            }}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Cart Button */}
          <Button
            startIcon={
              <Badge badgeContent={3} color="error">
                <ShoppingCartTwoToneIcon />
              </Badge>
            }
            component={Link}
            to="/cart"
            sx={{
              color: "#000",
              border: "1px solid black",
              borderRadius: "2rem",
            }}
          >
            Cart
          </Button>
        </Toolbar>
        <Navbar />
      </Box>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem button component={Link} to="/cart">
              <Badge badgeContent={3} color="error" sx={{ mr: 1 }}>
                <ShoppingCartTwoToneIcon />
              </Badge>
              <ListItemText primary="Cart" sx={{ color: "black" }} />
            </ListItem>
            <Divider />
            <ListItem button component={Link} to="/brands">
              <ListItemText primary="Brands" sx={{ color: "black" }} />
            </ListItem>
            <ListItem button component={Link} to="/offers">
              <ListItemText primary="Offers" sx={{ color: "black" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
