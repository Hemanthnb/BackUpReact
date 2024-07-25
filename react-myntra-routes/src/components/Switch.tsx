import React from "react";
import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";
import { useTheme } from "./context/ThemeMode";

function SwitchCheckBox() {
  const { mode, setMode } = useTheme();

  const handleToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setMode("dark") : setMode("light");
  };

  return (
    <FormControlLabel
      control={<Switch onChange={handleToggle} />}
      label={mode === "light" ? "Light" : "Dark"}
      color={mode === "dark" ? "white" : "black"}
    />
  );
}

export default SwitchCheckBox;
