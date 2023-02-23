import React, { useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const handleAuth = async (username, password) => {
    try {
      const response = await axios.post("sample/auth", { username, password });
      const newToken = response.data.token;
      setToken(newToken);
    } catch (error) {
      console.error(error);
    }
  };

  const handleExpire = () => {
    setToken(null);
  };

  const handleSetToken = (newToken) => {
    setToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        handleAuth,
        handleExpire,
        handleSetToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
