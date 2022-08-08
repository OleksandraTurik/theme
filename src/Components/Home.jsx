import React, { useContext } from "react";
import clsx from "clsx";
import ThemeContext from "../themeProvider/context";
import { actionType } from "../themeProvider/reducer";

import "./style.css";

const Home = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const handleDarkThemeClick = () => {
    dispatch({ type: actionType.CHANGE_THEME, theme: "dark" });
  };
  const handleLightThemeClick = () => {
    dispatch({ type: actionType.CHANGE_THEME, theme: "light" });
  };
  const mainDiv = clsx({
    flex: true,
    darkTheme: state.theme === "dark",
  });
  
  return (
    <div className="App">
      <div className={mainDiv}>
        <div className="button-wrapper">
          <button onClick={handleLightThemeClick}>Light</button>
          <button onClick={handleDarkThemeClick}>Dark</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
