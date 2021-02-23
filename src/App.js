import React from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes"
import "./App.css";
import Toggle from "./components/Toggler";
import {useDarkMode} from "./components/useDarkMode";
import ThemeSwitch from "./components/ThemeSwitch";

const App = () => {
    const {theme, themeToggler, themeTogglerWithParam} = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles/>
          <div className="App">
              <Toggle theme={theme} toggleTheme={themeToggler} />
              <h1>Alive</h1>
              <ThemeSwitch theme={theme} switchTheme={themeTogglerWithParam} />
            <p>Still alive</p>
          </div>
        </>
      </ThemeProvider>

  );
};
export default App;
