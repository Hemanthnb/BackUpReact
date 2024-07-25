import { Box, Button, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Products from "./Products";

function NavbarMemoized() {
  const [count, setCount] = useState<number>(0);

  
  const [search, setSearch] = useState<string | null>(null);
  const [product, setProduct] = useState<string>("");

  const handleOnclick = () => {
    setCount(count + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProduct(search??"");
  };

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [search]
  );

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Box>
      <Button variant="contained" onClick={handleOnclick}>
        Click me
      </Button>
      <form onSubmit={handleSubmit}>
        <SearchBar handleOnchange={handleOnChange} />
      </form>
      <Products search={product} />
    </Box>
  );
}

export default NavbarMemoized;
