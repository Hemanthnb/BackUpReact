import { type } from "os";
import { driver } from "../../shared/types/drivers";
import { customers } from "../../shared/types/customers";

type ProfileData = {
  drivers?: driver[];
  customers?: customers[];
};

type Profile = {
  data: ProfileData;
};

const Reusable: React.FC<Profile> = ({ data }): JSX.Element => {
  const profile = data.customers === undefined ? data.drivers : data.customers;

  profile?.map((ele) => console.log(ele.first_name));

  return <></>;
};

export default Reusable;
