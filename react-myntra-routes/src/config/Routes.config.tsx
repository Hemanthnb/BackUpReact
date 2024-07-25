import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Temp from "../pages/Temp";
import MenShoppingPage from "../pages/MenShoppingPage";
import WomenShoppingPage from "../pages/WomenShoppingpage";
import KidsShoppingPage from "../pages/KidsShoppingPage";
import HomeAndLivingPage from "../pages/HomeAndLivingPage";
import ShopPage from "../pages/ShopPage";
import NavBar from "../components/header/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <PageNotFound />,
  },

  {
    path: "/home",
    element: <Temp />,
    children: [
      { path: "shop/men", element: <MenShoppingPage /> },
      { path: "shop/women", element: <WomenShoppingPage /> },
      { path: "shop/kids", element: <KidsShoppingPage /> },
      { path: "shop/home-living", element: <HomeAndLivingPage /> },
    ],
  },
  // {
  //   path: "/shop",
  //   element: <ShopPage />,

  // },
  // { path: "/shop/men", element: <MenShoppingPage /> },
  // { path: "/shop/women", element: <WomenShoppingPage /> },
  // { path: "/shop/kids", element: <KidsShoppingPage /> },
  // { path: "/shop/home-living", element: <HomeAndLivingPage /> },
]);

// function Routes() {
//   return (
//       <RouterProvider router={router} />
//   );
// }

export default router;

const Router1 = () => {
  <Routes>
    <Route path="/" element={<NavBar />} />
    <Route path="/shop/*">
      <Shop />
    </Route>
  </Routes>;
};

const Shop = () => {
  return (
    <Routes>
      <Route path="/" element={<ShopPage />} />
      <Route path="/men" element={<MenShoppingPage />} />
      <Route path="/women" element={<WomenShoppingPage />} />
    </Routes>
  );
};
