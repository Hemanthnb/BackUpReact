import React from "react";
import { Link } from "react-router-dom";
import { Button, Box, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { boxStylesRow, header } from "./styles";

const combinedStyles = { ...header, ...boxStylesRow };

export default function Navbar() {
  return (
    <Box sx={combinedStyles}>
      <Button
        component={Link}
        to="/home"
        size="large"
        sx={{ fontSize: "1.1em" }}
      >
        Home
      </Button>
      <Button
        component={Link}
        to="/about"
        size="large"
        sx={{ fontSize: "1.1em" }}
      >
        About
      </Button>
      <Box sx={{ border: "none" }}>
        <TextField
          placeholder="Search Product"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ border: "none" }}
          variant="outlined"
        />
      </Box>
    </Box>
  );
}
