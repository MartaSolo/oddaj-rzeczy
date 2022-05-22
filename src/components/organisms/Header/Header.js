import Container from "../../atoms/Container";
import NavBar from "../../molecules/NavBar";
import HeaderAuth from "../../molecules/HeaderAuth";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <Container>
        <HeaderAuth />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
