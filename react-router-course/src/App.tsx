// App.tsx
import React from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import {
  BrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import path from "path";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import routes from "./Components/DynamicRouting/routes/routes.config";
import { Switch } from "@mui/material";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    errorElement: (
      <>
        <Navbar />
        <ErrorPage />
      </>
    ),
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
]);
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

    // {<RouterProvider router={router} />}
    // {/* <AppRouter/> */}
    // {/* <RouterProvider router={routes}/> */}
  );
}

export default App;
