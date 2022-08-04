import { createContext, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosContextProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosContextProvider;
