import { Container, Stack, Typography } from "@mui/material";
import NavBar from "../components/header/Navbar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const HomePage: React.FC = (): JSX.Element => {

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      console.log(counter++);
    }, 2000);
    
    // return () => {
    //   clearInterval(interval);
    //   console.log("Component Unmounted");
    // };
  });
  
  return (
    <>
      <NavBar />
      <Stack>
        <Typography variant="h2">Home</Typography>
      </Stack>
      <Outlet />
    </>
  );
};

export default HomePage;
