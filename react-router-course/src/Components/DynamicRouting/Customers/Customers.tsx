import customers from "../Types/types";
import { Box, Typography } from "@mui/material";
import { Container } from "./Styles";
import { Link, Outlet } from "react-router-dom";

type listOfCustomers = {
  listOfCustomers: customers[];
};

const Customer: React.FC<listOfCustomers> = ({
  listOfCustomers,
}): JSX.Element => {
  console.log(listOfCustomers);
  return (
    <>
      <Box sx={{ border: "1px solid black" }}>
        {listOfCustomers.map((customer) => (
          <Box key={customer.id} sx={{ ...Container, flexDirection: "row", justifyContent:"space-around" }}>
            <Link to={"/customers/" + customer.id}>
              <Typography variant="h5">{customer.id}</Typography>
            </Link>
            <Typography variant="h5">{customer.account_status}</Typography>
            <Typography variant="h5">{customer.first_name}</Typography>
            <Typography variant="h5">{customer.last_name}</Typography>
          </Box>
        ))}
      </Box>
      <Outlet/>
    </>
  );
};

export default Customer;
