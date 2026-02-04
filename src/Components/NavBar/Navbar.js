import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../../New_Logo.png";

const Navbar = ({ setSearchQuery }) => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
      <Toolbar>
        {/* Logo */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={() => navigate("/")}
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Box component="img" src={Logo} alt="Logo" sx={{ height: 60 }} />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            color: "#7e7a7aff",
            fontWeight: 700,
            flexGrow: 1,
            ml: 1,
            textAlign: "center",
            display: { xs: "none", md: "flex" },
          }}
        >
          Perqee.in
        </Typography>

        {/* Search Box */}
        <Box
          sx={{
            display: { xs: "flex", md: "flex" },
            alignItems: "center",
            mr: 4,
          }}
        >
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
            }}
            onChange={(e) => setSearchQuery(e.target.value)} // 🔹 Real-time search
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
        </Box>

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
    </AppBar>
  );
};

export default Navbar;
