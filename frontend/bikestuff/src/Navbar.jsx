import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import App from "./App";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="navbar">
      <h1>BIKES</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Bikes"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
