import Router from "./pages/Router";
import NavbarButton from "./option/NavbarButton";
import Footer from "./components/Footer";
import Logo from "./option/Logo";
import GlobalStyles from "./util/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyles />
      <Logo />
      <NavbarButton />
      <Router />
      <Footer />
    </>
  );
}

export default App;
