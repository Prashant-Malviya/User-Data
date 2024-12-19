import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import UserData from "./pages/UserData";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <Navbar onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-data" element={<UserData searchTerm={searchTerm} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
