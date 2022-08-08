import { createContext } from "react";

const ThemeContext = createContext({ state: null, dispatch: null });

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
