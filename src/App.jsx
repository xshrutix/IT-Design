import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Career from "./components/Career/Career";
import About from "./About";
import ContactPage from "./Contact";
import Header from "./components/Header";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Footer from "./Footer";
import { Team } from "./components/Team/Team";




const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Career />} path="/career" />
        <Route element={<Team />} path="/team" />
        <Route element={<ContactPage />} path="/contact" />
      </Routes>
      <ButtonGradient />
      <Footer />
    </BrowserRouter>

  );
};

export default App;
