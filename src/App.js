import React from 'react';
import "./App.css";
import BitcoinValueViewer from "./components/BitcoinValueViewer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./theme/GlobalStyles";
import { TransitionStyles } from "./theme/TransitionStyles";
import ThemeSelector from "./theme/ThemeSelector";
import { useTheme } from "./theme/ThemeHook";

function App() {
  const { theme, toggleMode, themeLoaded, toggled } = useTheme();

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={theme} toggled={toggled}>
          <GlobalStyles />
          {toggled && <TransitionStyles/>}
          <div className="App">
            <ThemeSelector theme={theme} toggleMode={toggleMode} />
            <BitcoinValueViewer />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
