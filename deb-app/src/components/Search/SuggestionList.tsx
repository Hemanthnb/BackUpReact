import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import useMoviesAPI from "../../hooks/useMoviesAPI";

const SuggestionList: React.FC<{ searchKey: string }> = React.memo(
  ({ searchKey }): JSX.Element => {
    console.log("Child Component");
    const movies = useMoviesAPI(searchKey);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const divRefs = useRef<HTMLLIElement[] | null>([]);

    useEffect(() => {
      console.log("child UseEffect");
      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "ArrowDown") {
          setSelectedIndex((prev) =>
            selectedIndex < movies.length - 1 ? prev + 1 : prev
          );
        } else if (e.key === "ArrowUp") {
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        }
      };
      window.addEventListener("keydown", handleKey);
      return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
      <>
        <Box
          sx={{
            backgroundColor: "#cacaca",
            overflowY: "auto",
            width: "12%",
            marginTop: "1px",
            paddingBottom: "6px",
            maxHeight: "200px",
            color: "white",
          }}
        >
          {movies.map((ele, index) => (
            <li
              style={{
                marginBottom: "2px",
                textAlign: "center",
                padding: "6px",
                backgroundColor:
                  index === selectedIndex ? "#4b4b4e" : "#cacaca",
                listStyle: "none",
              }}
              key={index}
            >
              {ele.label}
            </li>
          ))}
        </Box>
      </>
    );
  }
);

export default SuggestionList;

// https://api.env.temp/riders?page=1&page_size=10&search_by=first_name&sort_key=first_name&sort_by=asc&driver_ids=&account_status=&service_zone=&service_type=&search_key=david