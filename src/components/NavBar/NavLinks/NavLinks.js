import React from "react";
import "./NavLinks.scss";
import { Link } from "react-scroll";

export const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const clickHandler = () => {
    if (typeof closeMobileMenu === "function" && isMobile === true) {
      console.log("clickhandler");
      closeMobileMenu();
    }
  };
  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <Link
          to="start"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
          onClick={clickHandler}
        >
          Start
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="steps"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
          onClick={clickHandler}
        >
          O co chodzi?
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
          onClick={clickHandler}
        >
          O nas
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="organizations"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
          onClick={clickHandler}
        >
          Fundacja i organizacje
        </Link>
      </li>
      <li className="nav__list-item">
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          className="nav__list-link"
          onClick={clickHandler}
        >
          Kontakt
        </Link>
      </li>
    </ul>
  );
};
