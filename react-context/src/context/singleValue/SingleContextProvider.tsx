import React, { ReactNode } from "react";
import NumberContext from "./singleValueContext";

interface Props {
  children: ReactNode;
}

const SingleContextProvider: React.FC<Props> = ({ children }) => {
  const numberValue = 42;

  return (
    <NumberContext.Provider value={numberValue}>
      {children}
    </NumberContext.Provider>
  );
};

export default SingleContextProvider;
