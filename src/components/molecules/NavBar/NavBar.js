import NavDesktop from "../NavDesktop";
import NavMobile from "../NavMobile";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <>
      <NavMobile />
      <NavDesktop />
    </>
  );
};

export default NavBar;
