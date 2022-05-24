import NavBar from "../../molecules/NavBar";
import Container from "../../atoms/Container";
import HeaderAuthUserGiveStuff from "../../molecules/HeaderAuthUserGiveStuff";
import "./HeaderUserGiveStuff.scss";

const HeaderUserGiveStuff = () => {
  return (
    <header className="header user">
      <Container>
        <HeaderAuthUserGiveStuff />
        <NavBar />
      </Container>
    </header>
  );
};

export default HeaderUserGiveStuff;
