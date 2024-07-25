import { Box } from "@mui/material";
import React from "react";
import { container } from "./Styles";

function Child({ visible }: { visible: boolean }) {
  console.log(visible);
  return (
    <Box sx={{ ...container, display: visible ? "block" : "none" }}>
      I am Child
    </Box>
  );
}

export default Child;
