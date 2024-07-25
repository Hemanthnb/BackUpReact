import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "../context/ThemeMode";
import React, { useEffect, useState } from "react";
import { navbarSearchInputField } from "./styles";
import axios from "axios";
import User from "../../shared/interfaces/Users";

const callApi = async (searchinput: string) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  //   const searchresult = await response.data.filter((ele: User) => {
  //     console.log(ele.name.includes("L"))
  //   });

  const searchResults1 = await response.data.filter((user: User) => {
    const lowerCase = user.name.toLowerCase();
    return lowerCase.includes(searchinput);
  });

  console.log(await searchResults1);
};

const SearchBar = () => {
  const { mode } = useTheme();

  const [color, setColor] = useState<string>("white");
  const [data, setData] = useState<User[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    mode === "light" ? setColor("white") : setColor("black");
    callApi(searchInput);
  }, [mode, searchInput]);

  return (
    <TextField
      value={searchInput}
      onChange={handleOnchange}
      sx={{
        ...navbarSearchInputField,

        "&.MuiFormControl-root": {
          border: `1px solid ${color === "black" ? "grey" : "none"}`,
        },
        "& .MuiInputBase-input": {
          color: color === "black" ? "white" : "black",
        },
      }}
      placeholder="Search for product , brands and more"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: color === "black" ? "white" : "black" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
