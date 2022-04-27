import React from "react";
import "./NavLinks.scss";

export const NavLinks = () => {
  return (
    <ul className="nav__list">
      <li className="nav__list--item">
        <a href="/">Start</a>
      </li>
      <li>
        <a href="/">O co chodzi?</a>
      </li>
      <li>
        <a href="/">O nas</a>
      </li>
      <li>
        <a href="/">Fundacja i organizacje</a>
      </li>
      <li>
        <a href="/">Kontakt</a>
      </li>
    </ul>
  );
};
