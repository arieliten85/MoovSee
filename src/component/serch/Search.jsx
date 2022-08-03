import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    navigate("/?search=" + searchText);

    setSearchText("")
  };

  return (
    <form className="search" onSubmit={handlerSubmit}>
      <div className="searchBox">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit" className="lupa">
          <span className="material-icons">search</span>
        </button>
      </div>
    </form>
  );
}

//viejo

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { MovieContext } from "../../context/MovieContext";
// import { useNavigate } from "react-router-dom";

// export default function Search() {
//   const navigate = useNavigate();
//   const { search, setSearch } = useContext(MovieContext);
//   const [value, setValue] = useState("");

//   const handlerSearch = () => {
//     axios
//       .get(
//         `https://api.themoviedb.org/3/search/movie?api_key=0719e4f07abaf7a91364967ca675ffc0&language=en-US&query=${value}&page=1&include_adult=false`
//       )
//       .then((resp) => {
//         const movies = resp.data.results;
//         setSearch(movies);
//       })
//       .catch((error) => console.log(error));

//     navigate(`/search/${value}`);
//   };

//   useEffect(() => {
//     handlerSearch();
//   }, [value]);

//   console.log(search);
//   return (
//     <div>
//       <button onClick={handlerSearch}>Buscar</button>
//       <input
//         type="text"
//         placeholder="Nombre"
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// }
