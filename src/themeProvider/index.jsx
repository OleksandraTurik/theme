import React, { useReducer } from "react";
import ThemeContext from "./context";
import { defaultTheme, initialize, reducer } from "./reducer";

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    { theme: defaultTheme },
    initialize
  );
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
