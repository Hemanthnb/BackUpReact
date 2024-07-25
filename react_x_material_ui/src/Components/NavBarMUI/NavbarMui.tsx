import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
          Your Website Name
        </Typography>
        {/* Add your navigation links here */}
        <Typography variant="body1" noWrap component="div">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
