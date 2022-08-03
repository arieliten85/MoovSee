import { createContext, useState } from "react";
const initialState = {
  user: null,
  isAuthenticated: false,
  toggleAuth: () => null,
};
export const UserContext = createContext(initialState);
const UserContextProvider = ({ children }) => {
  
  const [alerta, setAlerta] = useState([]);

  const [isLoogedId, setIsLoogedId] = useState({
    user: JSON.parse(localStorage.getItem("user")),
    isAuthenticated: localStorage.getItem("auth") === "true",
  });

  const toggleAuth = (user) => {
    setIsLoogedId({
      user: user,
      isAuthenticated: !isLoogedId.isAuthenticated,
    });

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("auth", !isLoogedId.isAuthenticated);
  };

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  return (
    <UserContext.Provider
      value={{
        ...isLoogedId,
        setIsLoogedId,
        toggleAuth,
        ...alerta,
        mostrarAlerta,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
