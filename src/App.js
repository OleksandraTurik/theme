import Home from "./Components/Home";
import ThemeProvider from "./themeProvider";

import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
