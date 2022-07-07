// src/context/state.js
import App from 'next/app';
import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {



  let [darkMode, setDarkMode] = useState(false);
  let [continent, setContinent] = useState(null);
  let [searching, setSearching] = useState("");

  const values = useMemo(
      () => ({
          darkMode,
          setDarkMode,
          continent,
          setContinent,
          searching, 
          setSearching,
      }),
      [darkMode, continent, searching],
  )

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}