import { useState } from "react";
import NavLinks from "../NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import "./NavMobile.scss";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const clickHandler = () => setOpen(!open);

  const hamburgerIcon = (
    <GiHamburgerMenu
      className="nav__mobile-icon"
      size="50px"
      onClick={clickHandler}
    />
  );
  const closeIcon = (
    <GrFormClose
      className="nav__mobile-icon"
      size="50px"
      onClick={clickHandler}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className="nav__mobile">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default NavMobile;
