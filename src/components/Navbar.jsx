import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">WebTree</Link>
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`md:flex md:space-x-4 md:items-center font-bold ${
          menuOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 w-full bg-blue-600 md:w-auto md:bg-transparent z-10`}
      >
        <li className="border-b md:border-none">
          <Link
            to="/"
            className="block md:inline-block p-4 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>
        <li className="border-b md:border-none">
          <Link
            to="/user-data"
            className="block md:inline-block p-4 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            User Data
          </Link>
        </li>
        <li className="border-b md:border-none">
          <Link
            to="/about-us"
            className="block md:inline-block p-4 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
        </li>
        <li className="border-b md:border-none">
          <Link
            to="/contact-us"
            className="block md:inline-block p-4 hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contact Me
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 rounded text-black"
        />
      </div>
    </nav>
  );
};

export default Navbar;
