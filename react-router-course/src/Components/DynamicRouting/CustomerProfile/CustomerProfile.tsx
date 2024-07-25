import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

function CustomerProfile() {
  const params = useParams();
  console.log(params);
  
  return (
    <>
    <Typography variant="h4">Hello the id is {params.id}</Typography>
    </>
  );
}

export default CustomerProfile;
