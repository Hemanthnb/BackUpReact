import { useEffect, useState } from "react";
import listOfMovies from "../shared/types/movieList";
import moviesEndpoint from "../config/api/endpoints/moviesEndpoint";
import useDebounce from "./useDebounce";

const useMoviesAPI = (searchKey: string): listOfMovies[] => {
  console.log("hooks");
  const [movies, setMovies] = useState<listOfMovies[]>([]);
  const debounce = useDebounce(searchKey);

  useEffect(() => {
    const fetchListOfMovies = async () => {
      try {
        const data = await moviesEndpoint.getlistOfMovies();
        setMovies(
          data.filter((ele) =>
            ele.label.toLowerCase().includes(debounce?.toLowerCase() ?? "")
          )
        );
      } catch (e) {
        console.log("error", e);
      }
    };

    if (debounce) {
      fetchListOfMovies();
    }
  }, [debounce]);

  return movies;
};

export default useMoviesAPI;
