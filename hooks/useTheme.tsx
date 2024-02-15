"use client";

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeProvider";

export default function useTheme() {
  const { mode, setMode } = useContext(ThemeContext);

  if (mode === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return { mode, setMode };
}
