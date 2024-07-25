import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
  import useDebounce from "./hooks/debounce";


const setProductId = (quantity: string) => {
  return `response ${quantity}`;
};

function Debounce() {
  const [quantity, setQuantity] = useState<number>(0);
  const debounce= useDebounce(quantity);

  const handleOnclick = () => {
    setQuantity((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(setProductId(quantity.toString()));
  }, [debounce]);

  return (
    <>
      <div>Debounce</div>
      <Button onClick={handleOnclick}>Click Me</Button>
    </>
  );
}

export default Debounce;
