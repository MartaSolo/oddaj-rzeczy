import React from "react";
import "./NavLinks.scss";
import { Link } from "react-scroll";

export const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const clickHandler = () => {
    if (typeof closeMobileMenu === "function" && isMobile === true) {
      closeMobileMenu();
    }
  };
  return (
    <ul className="nav__list">
      <li className="nav__list-item" onClick={clickHandler}>
        <Link
          to="start"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
        >
          Start
        </Link>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <Link
          to="steps"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
        >
          O co chodzi?
        </Link>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
        >
          O nas
        </Link>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <Link
          to="organizations"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
        >
          Fundacja i organizacje
        </Link>
      </li>
      <li className="nav__list-item" onClick={clickHandler}>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
};
