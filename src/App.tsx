import "./App.css";
import { Routes, Route } from "react-router-dom";

import Hero from "./hero.tsx";
import Nav from "./nav.tsx";
import Footer from "./footer.tsx";
import Contact from "./contact.tsx";
import About from "./about.tsx";
import Menu from "./menu.tsx";


function App() {
  return (
    <div className="App bg-gray-700 min-h-screen">
         
      <Nav />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


      <Footer />

    </div>
  );
}

export default App;


