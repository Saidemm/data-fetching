import { useEffect, useState } from "react";
import * as themes from "./themes.json";
import {
  fetchFromLocalStorage,
  storeInLocalStorage,
} from "../utils/localStorage";

// A custom-hook handling dark/light states and their local storage
export const useTheme = () => {
  const [theme, setTheme] = useState(null);
  const [themeLoaded, setThemeLoaded] = useState(false);
  const [toggled, setToggled] = useState(false);

  const toggleMode = () => {
    setToggled(true);
    theme.name === "Light Mode"
      ? setTheme(themes.default.darkMode)
      : setTheme(themes.default.lightMode);
  };

  useEffect(() => {
    const storedTheme = fetchFromLocalStorage("currentTheme");
    storedTheme !== null
      ? setTheme(storedTheme)
      : setTheme(themes.default.lightMode);
    setThemeLoaded(true);
  }, []);

  useEffect(() => {
    if (theme != null) {
      storeInLocalStorage("currentTheme", theme);
    }
  }, [theme]);

  return { theme, toggleMode, themeLoaded, toggled};
};
