import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { container } from "./Styles";

function Parent({ setVisible, visible }: { setVisible: (val:boolean) => void, visible:boolean }) {
  return (
    <Box
      sx={{
        ...container,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        opacity:visible?"0.5":"1"
      }}
    >
      <Button variant="contained" onClick={() => setVisible(true)}>
        Parent
      </Button>
    </Box>
  );
}

export default Parent;
