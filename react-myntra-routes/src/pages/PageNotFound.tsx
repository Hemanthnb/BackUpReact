import NotFound from "../components/error/NotFound";
import NavBar from "../components/header/Navbar";

const PageNotFound: React.FC = (): JSX.Element => {
  return (
    <>
      <NavBar/>
      <NotFound />
    </>
  );
};

export default PageNotFound;