import { createContext, useContext, useEffect, useState } from "react";

const ThemeCtx = createContext({
  theme: "dark",
  toggle: () => {},
});

/*
ThemeToggle & ThemeProvider
Purpose:
Manages the dark/light theme state for the application. 
Persists user preference in localStorage and applies the theme class to the HTML element.
*/
export function ThemeProvider({ children }) {
  useEffect(() => {
    // Force dark theme and prevent switching
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return <ThemeCtx.Provider value={{ theme: "dark", toggle: () => {} }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
