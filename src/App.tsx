import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitchar";

import { BookStoreThemeProvider } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
      <ThemeSwitcher />
      <Layout children={<Home />} />
    </BookStoreThemeProvider>
  );
}

export default App;
