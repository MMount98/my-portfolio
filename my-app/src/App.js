import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Porfolio";
import Resume from "./components/pages/Resume";
import ContactMe from "./components/pages/ContactMe";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
