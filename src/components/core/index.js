import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "../../theme";
import WorkshopBrowser from "./App";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WorkshopBrowser />
    </ThemeProvider>
  );
}

export default App;
