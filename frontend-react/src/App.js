import { ThemeProvider } from "styled-components";
import { Navigation } from "swiper";
import GlobalStyles from "./styles/GlobalStyle";
import { light } from './styles/Themes'

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
