import { Box } from "@mui/material";
import React from "react";

function Cards() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 12, 13, 14, 15, 16, 17];
  
  return (
    <Box 
      sx={{
        display: "flex",
        padding: "1rem",
        backgroundColor: "blue",
        flexWrap: "wrap",
        // justifyContent: "center", // Center items horizontally
        gap: "1rem", // Gap between items
      }}
    >
      {arr.map((ele, index) => (
        <Box 
          key={index}
          sx={{
            flexShrink: 1,
            backgroundColor: "red",
            flexBasis: "calc(33.333% - 2rem)", // Responsive width
            height: "200px",
            color: "white",
            fontWeight: "100",
            fontSize: "50px",
            display: "flex",
            justifyContent: "center", // Center text horizontally
            alignItems: "center", // Center text vertically
          }}
        >
          card is {ele}
        </Box>
      ))}
    </Box>
  );
}

export default Cards;
