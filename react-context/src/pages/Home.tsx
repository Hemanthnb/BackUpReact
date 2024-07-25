import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <Typography variant="h3">Home page</Typography>
      <Button component={Link} to="/login">
        Login
      </Button>
    </>
  );
};

export default Home;
