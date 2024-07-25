import React, { useContext } from "react";
import {
  AdvanceContext,
  useTheme,
} from "../../context/AdvanceSyntax/AdvanceContext";
import { Button } from "@mui/material";

function Navbar() {
  // const { mode, setMode } = useContext(AdvanceContext);

  // Custom theme.
  const { mode, setMode } = useTheme();

  const handleLight = () => {
    setMode("Light");
  };

  const handleDark = () => {
    setMode("Dark");
  };

  return (
    <>
      <div>The mode is {mode}</div>
      <Button onClick={handleLight}>Light</Button>
      <Button onClick={handleDark}>Dark</Button>
    </>
  );
}

export default Navbar;
