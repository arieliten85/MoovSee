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
