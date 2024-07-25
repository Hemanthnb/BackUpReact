import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { memo, useEffect } from "react";

// interface props{
//     handleOnchange:()=>void
// }

// type handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void; we cannt do like this

function SearchBar({
  handleOnchange,
}: {
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  // {
  //   handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // }) {
  useEffect(() => {
    console.log("search bar Rendered");
  });

  return (
    <Box>
      <TextField
        onChange={handleOnchange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default SearchBar;
