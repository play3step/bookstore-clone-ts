import Layout from "./components/layout/Layout";
import Home from "./pages/Home";

import { BookStoreThemeProvider } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <Layout children={<Home />} />
    </BookStoreThemeProvider>
  );
}

export default App;
