import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./Components";
// import { Home, About, Contact, Offers, Menu } from "./Pages";
import {Home, Offers, Menu, Contact} from "./Pages";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Offers" element={<Offers />} />
        {/* <Route path="/About" element={<About />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
