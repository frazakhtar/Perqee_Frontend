import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Navbar from "./Components/NavBar/Navbar";

function App() {
  // global search state (applied on Enter)
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* Pass setter to Navbar */}
      <Navbar setSearchQuery={setSearchQuery} />

      <Routes>
        {/* Pass searchQuery to Home */}
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
