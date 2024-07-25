import { RouterProvider } from "react-router-dom";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Component1 from "./context/singleValue/Component1";
// import SingleContextProvider from "./context/singleValue/SingleContextProvider";
import router from "./routes/routes.config";
import Navbar from "./pages/AdvancePages/Navbar";
import { AdvanceContextProvide } from "./context/AdvanceSyntax/AdvanceContext";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<string>("");

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>

    // <AdvanceContextProvide value={{ mode, setMode }}>
    //   <Navbar />
    // </AdvanceContextProvide>
    
    // {/* <SingleContextProvider>
    //     <Component1/>
    // </SingleContextProvider> */}
  );
}

export default App;
