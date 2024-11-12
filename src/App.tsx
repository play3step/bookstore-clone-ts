import { ThemeProvider } from "styled-components";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { light } from "./style/theme";
import { GlobalStyle } from "./style/global";

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light" />
      <Layout children={<Home />} />
    </ThemeProvider>
  );
}

export default App;
