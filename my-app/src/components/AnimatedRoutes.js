import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Porfolio";
import Resume from "./pages/Resume";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/home";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </AnimatePresence>
  );
}
