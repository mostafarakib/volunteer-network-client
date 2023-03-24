import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="banner-container">
      <div>
        <h1>Become a voice for people</h1>
        <div className="flex justify-center mt-4">
          <input type="search" placeholder="Search..." />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
