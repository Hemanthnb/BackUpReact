import { Stack, Typography } from "@mui/material";
import NavBar from "../header/Navbar";

const NotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <Stack>
        <Typography variant="h2">404 Page Not Found</Typography>
      </Stack>
    </>
  );
};
export default NotFound;
