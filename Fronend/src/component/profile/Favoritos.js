import React, { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext";
import FavoritoSelect from "./FavoritoSelect";

export default function Favoritos() {
  const { favoritos } = useContext(FavoritosContext);

    return (
      <>
        {favoritos.map((favorito,i) => (
          <FavoritoSelect key={favorito.id} fav={favorito} i={i} />
        ))}
      </>
    );
  
}
