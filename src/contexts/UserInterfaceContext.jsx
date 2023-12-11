import React, { createContext, useState } from "react";

export const UserInterfaceContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const UserInterfaceProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "true"
  );

  const toggleDarkMode = () => {
    localStorage.setItem("isDarkMode", !isDarkMode);
    setDarkMode(!isDarkMode);
  };
  return (
    <UserInterfaceContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </UserInterfaceContext.Provider>
  );
};
