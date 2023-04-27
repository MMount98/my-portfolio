import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

import AboutMe from "./components/pages/AboutMe";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
