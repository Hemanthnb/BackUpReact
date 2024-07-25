import React, { useContext } from "react";
import NumberContext from "./singleValueContext";

const Component1: React.FC = () => {
  const number = useContext(NumberContext);

  return (
    <div>
      <p>The number is: {number}</p>
    </div>
  );
};

export default Component1;
