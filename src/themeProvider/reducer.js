export const actionType = {
  CHANGE_THEME: "CHANGE_THEME",
};

export const defaultTheme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

export const initialize = (initialValue) => {
  localStorage.setItem("theme", initialValue.theme);
  return initialValue;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actionType.CHANGE_THEME:
      localStorage.setItem("theme", action.theme);
      return { ...state, theme: action.theme };
    default:
      return state;
  }
};
