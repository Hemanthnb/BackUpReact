import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextFieldMUI from "./Components/TextFieldMUI/TextFieldMui";
import TransferList from "./Components/Interview/TransferList";
import Navbar from "./Components/NavBarMUI/NavbarMui";
import Unmounts from "./Components/Unmounts/ComponentUnmount";
import SearchFeature from "./Components/Searchbar/Implemented/SearchFeature";
import Debounce from "./Components/DebouncingFeatureButtonClick/Debounce";
import NavbarMemoized from "./Components/Memoization/Navbar";
import { Box } from "@mui/material";
import { BASE_URL } from "./config/api/api.config";
import Products from "./Components/Products/Products";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#330099",
    },
  },
  typography: {
    fontFamily: "Dancing Script", // Specify the custom font
  },
});

const listOfCountries = [{ countryName: "India" }, { countryName: "Israel" }];

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/hell",
    element: <></>,
  },
]);

function App() {
  return (
    // <ThemeProvider theme={theme}>
    // <TextFieldMUI countries={listOfCountries} />
    // </ThemeProvider>
    // <TransferList/>
    // <Navbar/>
    // <Unmounts />
    <SearchFeature/>
    // <Debounce/>
    // <NavbarMemoized/>
    // <RouterProvider router={routes}/>
    // <Products />
  );
}

export default App;
