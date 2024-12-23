"use client";
import themes from "./themes";

import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalUpdatecontext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdatecontext.Provider value={{}}>
        {children}
      </GlobalUpdatecontext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(GlobalUpdatecontext);
