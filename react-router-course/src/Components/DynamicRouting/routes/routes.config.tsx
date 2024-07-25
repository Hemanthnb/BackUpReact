import { createBrowserRouter } from "react-router-dom";
import Customer from "../Customers/Customers";
import listOfCustomers from "../staticData/customers";
import CustomerProfile from "../CustomerProfile/CustomerProfile";
import Home from "../HomePage/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/customers",
    element: <Customer listOfCustomers={listOfCustomers} />,
    children:[
      {
        path:'/:id',
        element:<CustomerProfile/>
      }
    ]
  },
  // {
  //   path: "/customers/:id",
  //   element: <CustomerProfile />,
  // },
]);

export default routes;
