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
          to="/#start"
          activeClassName="active"
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
          activeClassName="active"
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
          activeClassName="active"
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
          activeClassName="active"
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
          activeClassName="active"
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
// import { Link } from "react-scroll";
// import "./NavLinks.scss";

// const NavLinks = ({ isMobile, closeMobileMenu }) => {
//   const closeMenuHandler = () => {
//     if (typeof closeMobileMenu === "function" && isMobile === true) {
//       closeMobileMenu();
//     }
//   };
//   return (
//     <ul className="nav__list">
//       <li className="nav__list-item">
//         <Link
//           to="start"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           className="nav__list-link"
//           onClick={closeMenuHandler}
//         >
//           Start
//         </Link>
//       </li>
//       <li className="nav__list-item">
//         <Link
//           to="steps"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           className="nav__list-link"
//           onClick={closeMenuHandler}
//         >
//           O co chodzi?
//         </Link>
//       </li>
//       <li className="nav__list-item">
//         <Link
//           to="about"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           className="nav__list-link"
//           onClick={closeMenuHandler}
//         >
//           O nas
//         </Link>
//       </li>
//       <li className="nav__list-item">
//         <Link
//           to="organizations"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           className="nav__list-link"
//           onClick={closeMenuHandler}
//         >
//           Fundacja i organizacje
//         </Link>
//       </li>
//       <li className="nav__list-item">
//         <Link
//           to="contact"
//           activeClass="active"
//           spy={true}
//           smooth={true}
//           className="nav__list-link"
//           onClick={closeMenuHandler}
//         >
//           Kontakt
//         </Link>
//       </li>
//     </ul>
//   );
// };

// export default NavLinks;
