import { useEffect } from "react";

const Unmounts = () => {
  useEffect(() => {
    
    return () => {
      console.log("Component unmounted");
    };
  });
  return <></>;
};

export default Unmounts;