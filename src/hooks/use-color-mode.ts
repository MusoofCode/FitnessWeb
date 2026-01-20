import * as React from "react";

type ColorMode = "dark" | "light";

const STORAGE_KEY = "pf-color-mode";

function applyMode(mode: ColorMode) {
  // This project uses `.light` class to swap CSS variables.
  document.documentElement.classList.toggle("light", mode === "light");
}

export function useColorMode() {
  const [mode, setMode] = React.useState<ColorMode>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "light" ? "light" : "dark";
  });

  React.useEffect(() => {
    applyMode(mode);
    localStorage.setItem(STORAGE_KEY, mode);
  }, [mode]);

  const toggle = React.useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  return { mode, setMode, toggle };
}
