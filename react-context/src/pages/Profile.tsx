import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Typography } from "@mui/material";

export default function Profile(): JSX.Element {
  const userContext = useContext(UserContext);
  if (!userContext) {
    return <Typography variant="h6">UserContext is not available</Typography>;
  }
  const { user } = userContext;

  return (
    <>
      <Typography variant="h6"> welcome {user?.userName}</Typography>
    </>
  );
}
