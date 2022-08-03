import React, { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../context/UserContext";
import { FavoritosContext } from "../../context/FavoritosContext";
import Favoritos from "./Favoritos";

export default function Me() {
  const { user } = useContext(UserContext);
  const { favoritos, setFavoritos } = useContext(FavoritosContext);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/favourite/${user.id}`)
      .then((resp) => setFavoritos(resp.data));
  }, [favoritos.id, user.id]);

  if (favoritos.length === 0) {
    return (
      <div className="emptyBox">
        <h4 className="texto">You don't have favorites yet</h4>
        <p> Create your own list of Movies and series</p>
      </div>
    );
  } else {
    return (
      <div className="BoxFavoritos">
        <h1 className="tituloFavoritos texto">¡Hello, {user.name}! </h1>
        <h2 className="subTituloFavoritos ">
          Create your own list of Movies and series by adding them to this list
          of favorites!
        </h2>

        <div className="favoritosContainer">
          <Favoritos />
        </div>
      </div>
    );
  }
}
