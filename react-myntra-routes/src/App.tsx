import "./App.css";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
import router from "./config/Routes.config";
import { ThemeContextProvider } from "./components/context/ThemeMode";
import { useState } from "react";
import { Box } from "@mui/material";

function App() {
  const [mode, setMode] = useState<string>("light");

  // console.log(process.env.REACT_APP_API_BASE_URL);
  return (

    // <BrowserRouter>
    
    // </BrowserRouter>
    // // <>
      <ThemeContextProvider value={{mode,setMode}}>
        <RouterProvider router={router} />
      </ThemeContextProvider> 
    //   {/* <Box> the url : {process.env.REACT_APP_API_BASE_URL}</Box> */}
    // // </>
  );
}

export default App;
