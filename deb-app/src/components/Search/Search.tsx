import { Box, InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SuggestionList from "./SuggestionList";
import React, { useState } from "react";

const Search: React.FC = (): JSX.Element => {
  console.log("Parent component");
  const [text, setText] = useState<string | null>(null);
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box>
          <TextField
            variant="outlined"
            placeholder="Search Movies"
            value={text ?? ""}
            onChange={handleOnChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        {text && <SuggestionList searchKey={text} />}
      </Box>
    </>
  );
};
export default Search;
