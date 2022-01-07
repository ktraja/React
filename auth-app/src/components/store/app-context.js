import React, { useState } from "react";

const AppContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, expiresIn) => {},
  logout: () => {},
});

export const AppContextProvider = (props) => {
  const [token, setToken] = useState();
  const isLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("validTill");
  };

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
