import NavBar from "../../molecules/NavBar";
import Container from "../../atoms/Container";
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
