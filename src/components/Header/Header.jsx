import React from "react";
import JIITlogo from './../../assets/images.png';
import './Header.css';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={JIITlogo} alt="JIIT logo"/>
          <h1>Welcome, Mr. X</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="user-info">
          <span>X</span>
          <div className="avatar">
            {/* Add user avatar image or component here */}
          </div>
        </div>
      </header>
    );
};
  
export default Header;
  