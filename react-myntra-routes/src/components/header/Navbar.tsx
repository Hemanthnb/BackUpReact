import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import MyntraLogo from "../../asset/images/Components/MyntraLogo";
import { Link, Outlet } from "react-router-dom";
import {
  navbarButton,
  navbarSearchInputField,
  Container,
  navIcons,
} from "./styles";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SwitchCheckBox from "../Switch";
import { useTheme } from "../context/ThemeMode";
import { useEffect, useState } from "react";
import SearchBar from "../Searchbar/SearchBar";

const NavBar: React.FC = (): JSX.Element => {
  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#000000", // Setting the text color for buttons
      },
    },
    typography: {
      button: {
        fontWeight: "700",
        fontSize: "16px",
      },
    },
  });

  const { mode } = useTheme();

  const [color, setColor] = useState<string>("white");

  useEffect(() => {
    mode === "light" ? setColor("white") : setColor("black");
  }, [mode]);

  return (
    <>
      <Box
        sx={{
          boxShadow: "0px 1px 10px grey",
          backgroundColor: color,
        }}
      >
        <Box
          sx={{ ...Container, justifyContent: "space-evenly", height: "100px" }}
        >
          <Box
            sx={{
              width: "50px",
              height: "60px",
            }}
          >
            <Link to="/">
              <MyntraLogo />
              {/* <img src={MyntraLogo} alt="logo" /> */}
            </Link>
          </Box>
          <ThemeProvider theme={customTheme}>
            <Button
              component={Link}
              to="/home/shop/men"
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              MEN
            </Button>

            <Button
              component={Link}
              to="/home/shop/women"
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              WOMEN
            </Button>
            <Button
              component={Link}
              to="/home/shop/kids"
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              KIDS
            </Button>
            <Button
              component={Link}
              to="/home/shop/home-living"
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              HOME & LIVING
            </Button>
            <Button
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              BEAUTY
            </Button>
            <Button
              sx={{
                ...navbarButton,
                color: mode === "light" ? "black" : "white",
                borderBottom: color,
                "&:hover": {
                  borderBottom: "4px solid #f73378",
                  backgroundColor: color,
                },
              }}
              variant="text"
            >
              STUDIO
            </Button>
          </ThemeProvider>

          <SearchBar />

          <Box
            sx={{
              ...Container,
              width: "12%",
              justifyContent: "space-between",
            }}
          >
            <Box sx={Container}>
              <ThemeProvider theme={customTheme}>
                <IconButton>
                  <Person2OutlinedIcon
                    fontSize="medium"
                    sx={{ color: color === "black" ? "white" : "black" }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    ...navIcons,
                    color: color === "black" ? "white" : "black",
                  }}
                >
                  Profile
                </Typography>
              </ThemeProvider>
            </Box>
            <Box sx={Container}>
              <ThemeProvider theme={customTheme}>
                <IconButton>
                  <FavoriteBorderIcon
                    fontSize="medium"
                    sx={{ color: color === "black" ? "white" : "black" }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    ...navIcons,
                    color: color === "black" ? "white" : "black",
                  }}
                >
                  Wishlist
                </Typography>
              </ThemeProvider>
            </Box>
            <Box sx={Container}>
              <ThemeProvider theme={customTheme}>
                <IconButton>
                  <ShoppingBagOutlinedIcon
                    fontSize="medium"
                    sx={{ color: color === "black" ? "white" : "black" }}
                  />
                </IconButton>
                <Typography
                  sx={{
                    ...navIcons,
                    color: color === "black" ? "white" : "black",
                  }}
                >
                  Bag
                </Typography>
              </ThemeProvider>
            </Box>
          </Box>
          <SwitchCheckBox />
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
