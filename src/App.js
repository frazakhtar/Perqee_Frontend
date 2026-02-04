import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Components/Home/HomePage";
import About from "./Components/About/About";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  // global search state (applied on Enter)
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="app-layout">
      <main className="main-content">
        <>
          {/* Pass setter to Navbar */}
          <Header setSearchQuery={setSearchQuery} />

          <Routes>
            {/* Pass searchQuery to Home */}
            <Route path="/" element={<Home searchQuery={searchQuery} />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </>
      </main>

      <Footer />
    </div>
  );
}

export default App;
