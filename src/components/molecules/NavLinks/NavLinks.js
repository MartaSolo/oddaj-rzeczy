import { HashLink } from "react-router-hash-link";
import "./NavLinks.scss";

const NavLinks = ({ isMobile, closeMobileMenu }) => {
  const closeMenuHandler = () => {
    if (typeof closeMobileMenu === "function" && isMobile === true) {
      closeMobileMenu();
    }
  };
  return (
    <ul className="nav__list">
      <li className="nav__list-item">
        <HashLink
          smooth
          to="/#top"
          className="nav__list-link"
          onClick={closeMenuHandler}
        >
          Start
        </HashLink>
      </li>
      <li className="nav__list-item">
        <HashLink
          smooth
          to="/#steps"
          className="nav__list-link"
          onClick={closeMenuHandler}
        >
          O co chodzi?
        </HashLink>
      </li>
      <li className="nav__list-item">
        <HashLink
          smooth
          to="/#about"
          className="nav__list-link"
          onClick={closeMenuHandler}
        >
          O nas
        </HashLink>
      </li>
      <li className="nav__list-item">
        <HashLink
          smooth
          to="/#organizations"
          className="nav__list-link"
          onClick={closeMenuHandler}
        >
          Fundacja i organizacje
        </HashLink>
      </li>
      <li className="nav__list-item">
        <HashLink
          smooth
          to="/#contact"
          className="nav__list-link"
          onClick={closeMenuHandler}
        >
          Kontakt
        </HashLink>
      </li>
    </ul>
  );
};

export default NavLinks;
