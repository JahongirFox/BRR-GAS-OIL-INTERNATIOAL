import React, { useState } from "react";
import './Navbar.css';
import BRR from './brrpng.png';

function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
  setIsOpen(!isOpen);
};

  return (
    <div className="Navbar">
      <div className="Flex-div">
        <div className="Nav-flex">
          <img width={'76px'} src={BRR} alt="BRR Logo" />
          <p>BRR GAS OIL <br /> INTERNATIONAL</p>
        </div>

        {/* Hamburger Menu */}
        <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu} // Ensure this is in your code
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isOpen ? "visible" : ""}`} id="nav-links">
          <li><a href="#home">Главная</a></li>
          {/* <p>|</p> */}
          <li><a href="#about">О нас</a></li>
          {/* <p>|</p> */}
          <li><a href="#services">Продукция</a></li>
          {/* <p>|</p> */}
          <li><a href="#contact">Бензин</a></li>
          {/* <p>|</p> */}
          <li><a href="#contact">Категории промышленности</a></li>
          {/* <p>|</p> */}
          <li><a href="#contact">Контакты</a></li>
          {/* <p>|</p> */}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
