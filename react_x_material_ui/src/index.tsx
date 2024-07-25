import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Buttons from "./Components/ButtonsMUI/Buttons";
import { AreUHuman } from "./Components/CheckBoxMUI/CheckBox";
import RadioButtons from "./Components/RadioButtosMUI/RadioButtons";
import { Box, Select } from "@mui/material";
import Selects from "./Components/StaticDropDowns/Selects";
import SliderComponent from "./Components/SliderMUI/SliderMUI";
import { VolumeUp } from "@mui/icons-material";
import RangeSlider from "./Components/SliderMUI/RangeBasedSLider";
import SwitchMui from "./Components/Switch/SwitchMui";
import TextFieldMUI from "./Components/TextFieldMUI/TextFieldMui";
import PasswordMui from "./Components/Password/PasswordMui";
import Overlap from "./pages/Overlap";
import Cards from "./Components/Cards/Cards";
import AutoComplete from "./Components/Searchbar/AutoComplete";
import SearchFeature from "./Components/Searchbar/Implemented/SearchFeature";
import KeyDown from "./Components/Searchbar/KeyDpwnUp/KeyDown";

// const top100Films = [
//   { label: 'The Shawshank Redemption', year: 1994 },
//   { label: 'The Godfather', year: 1972 },
//   { label: 'The Godfather: Part II', year: 1974 },
//   { label: 'The Dark Knight', year: 2008 },
//   { label: '12 Angry Men', year: 1957 },
//   { label: "Schindler's List", year: 1993 },
//   { label: 'Pulp Fiction', year: 1994 },
//   {
//     label: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//   },
//   { label: 'The Good, the Bad and the Ugly', year: 1966 },
//   { label: 'Fight Club', year: 1999 },
//   {
//     label: 'The Lord of the Rings: The Fellowship of the Ring',
//     year: 2001,
//   }
// ]

const top100Films = ["KGF", "Vikram"];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <AutoComplete top100Films={top100Films}/> */}
    {/* <Buttons/> */}
    {/* <CheckBox/> */}
    {/* <AreUHuman/> */}
    {/* <RadioButtons/> */}
    {/* <Selects/> */}

    {/* <SliderComponent/> */}
    {/* <RangeSlider/> */}
    {/* <SwitchMui/> */}
    <App/>
    {/* <PasswordMui/> */}
    {/* <Overlap/> */}
    {/* <Cards/> */}
    {/* <AutoComplete /> */}
    {/* <SearchFeature /> */}
    {/* <KeyDown/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
