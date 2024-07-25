import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function PasswordMui() {
  const [text, setText] = useState<string>("");
  const [showPassword, setShowPasswrd] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const HandleShowPassword = () => {
    setShowPasswrd((prev) => !prev);
  };
  return (
    <>
      <Box>
        <TextField
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={HandleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
}
