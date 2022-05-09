import NavBar from "../../molecules/NavBar";
import Container from "../../atoms/Container";
import HeaderAuthUser from "../../molecules/HeaderAuthUser";
import "./HeaderUser.scss";

const HeaderUser = () => {
  return (
    <header className="header user">
      <Container>
        <HeaderAuthUser />
        <NavBar />
      </Container>
    </header>
  );
};

export default HeaderUser;
