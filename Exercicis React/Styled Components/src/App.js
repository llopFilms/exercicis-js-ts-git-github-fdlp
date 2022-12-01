import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";


const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyles/>
        <Header />
        <Container className="container">
          <h1>Hola nois!</h1>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
