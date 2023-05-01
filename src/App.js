import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
