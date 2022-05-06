import Container from "../../atoms/Container";
import FooterIcon from "../../atoms/FooterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <FooterIcon className="footer__icon facebook" />
        <FooterIcon className="footer__icon instagram" />
      </Container>
    </footer>
  );
};

export default Footer;
