import React, { useContext, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login: React.FC = (): JSX.Element => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOnChangeUserName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUserName(event.target.value);
  };

  const handleOnChangePassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

    const userContext = useContext(UserContext);

    if (!userContext) {
      return <Typography variant="h6">UserContext is not available</Typography>;
    }

//   if (!useContext(UserContext)) {
//     return <Typography variant="h6">UserContext is not available</Typography>;
//   }

  const { setUser } = userContext;

  const handleSubmit = () => {
    setUser({ userName, password });
    if (userName != null && password != null) {
      navigate("/profile");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            width: "25%",
            height: "45%",
            padding: "5px",
            backgroundColor: "#eeeeee",
            paddingY: "80px",
            paddingX: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography variant="h4">Login Page</Typography>
          <TextField
            sx={{ width: "100%" }}
            value={userName}
            onChange={handleOnChangeUserName}
            label="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            value={password}
            onChange={handleOnChangePassword}
            label="password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Login;
