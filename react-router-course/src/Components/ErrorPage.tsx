import React from "react";
import ErrorImage from "../Components/Error.png"; // Know How Images are imported in react
import { Box, Typography } from "@mui/material";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1">Uh-Oh</Typography>
        <Typography variant="h4">
          The page you are looking for may have been moved, or never exist
        </Typography>
      </Box>
      <Box sx={{ marginTop: "50px" }}>
        <img src={ErrorImage} alt="Error" />
      </Box>
    </Box>
  );
};

export default ErrorPage;
