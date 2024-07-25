import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ShopPage() {
  return (
    <>
      <NavBar />
      <Box>
        <Typography variant="h2">Shopping Page</Typography>
      </Box>
      <Outlet/>
    </>
  );
}
