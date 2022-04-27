import React from "react";
import "./NavLinks.scss";

export const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const clickHandler = () => {
    if (typeof closeMobileMenu === "function" && isMobile === true) {
      closeMobileMenu();
    }
  };
  return (
    <ul className="nav__list">
      <li className="nav__list-item" onClick={clickHandler}>
        <a href="/" className="nav__list-link">
          Start
        </a>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <a href="/" className="nav__list-link">
          O co chodzi?
        </a>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <a href="/" className="nav__list-link">
          O nas
        </a>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <a href="/" className="nav__list-link">
          Fundacja i organizacje
        </a>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <a href="/" className="nav__list-link">
          Kontakt
        </a>
      </li>
    </ul>
  );
};
