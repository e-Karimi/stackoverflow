"use client";

import React, { useState, useEffect, createContext } from "react";

interface ThemeContextType {
  mode: String;
  setMode: (mode: String) => void;
}

export const ThemeContext = createContext<ThemeContextType>({ mode: "", setMode: () => {} });

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<String>("");

  const handleThemeChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-colors-scheme:dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [mode]);

  return (
    <>
      <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
    </>
  );
}
