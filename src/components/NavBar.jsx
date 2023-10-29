import React from "react";
import '../App.css';
import logo from '../assets/logo.svg';
import DropDown from '../assets/dropDown.svg';

const NavBar = () => {
  const menuItems = [
    "Home",
    "About",
    "Above",
    "Auth Pagea",
    "Features",
    "Pricing",
  ];

  return (
    <div className="nav-bar flex items-center">

      <div className="heading">
        <img src={logo} alt="Logo" className="h-8 w-8"/>
        <h2 className="text-zinc-800 text-2xl font-bold font-['Istok Web']">COMU</h2>
      </div>

      <div className="menu">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            {["Home", "About", "Above", "Auth Pagea"].includes(item) && (
              <>
                {item}
                <img src={DropDown} alt="Dropdown" className="h-4 w-4 ml-2" />
              </>
            )}
            {!["Home", "About", "Above", "Auth Pagea"].includes(item) && item}
          </div>
        ))}
      </div>

      <div className="getStarted flex items-center">
        <div>Get Started</div>
      </div>
    </div>
  );
};

export default NavBar;