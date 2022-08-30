import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyle";
import { light } from './styles/Themes'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        New Project
      </ThemeProvider>


    </>
  );
}

export default App;
