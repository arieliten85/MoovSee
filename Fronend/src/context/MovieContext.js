import axios from "axios";
import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useLocation } from "react-router";

export const MovieContext = createContext();

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [moviesBanner, setMoviesBanner] = useState([]);
  const [movieSelect, setMovieSelect] = useState([]);
  const [topMovie, setTopMovie] = useState([]);
  const [lastMovie, setLastMovie] = useState([]);
  const [similarMovie, setSimilarMovie]=useState([])
 
  const query = useQuery();
  const search = query.get("search");

  const ApiKey = "5b20532c734f556ebab419a5c9e8fbde

  useEffect(() => {
    const searchUrl = search
      ? `https://api.themoviedb.org/3/search/multi?api_key=${ApiKey}&language=en-US&query=${search}`
      : `https://api.themoviedb.org/3/movie/popular?api_key${ApiKey}`;

    axios
      .get(searchUrl)
      .then((resp) => {
        setMovies(resp.data.results);
      })
      .catch((error) => console.log(error));
  }, [search]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0719e4f07abaf7a91364967ca675ffc0"
      )
      .then((resp) => {
        setTopMovie(resp.data.results);
      })
      .catch((error) => console.log(error));

      axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=0719e4f07abaf7a91364967ca675ffc0"
      )
      .then((resp) => {
        setLastMovie(resp.data.results);
      })
      .catch((error) => console.log(error));

      axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=0719e4f07abaf7a91364967ca675ffc0"
      )
      .then((resp) => {
        setMoviesBanner(resp.data.results);
      })
      .catch((error) => console.log(error));
      
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        movieSelect,
        setMovieSelect,
        topMovie,
        setTopMovie,
        setLastMovie,
        lastMovie,
        setSimilarMovie,
        similarMovie,
        moviesBanner
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
