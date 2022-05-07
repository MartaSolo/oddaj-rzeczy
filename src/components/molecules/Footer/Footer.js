import Container from "../../atoms/Container";
import FooterIcon from "../../atoms/FooterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <Container> */}
      <div className="footer__content">
        <div className="footer__content-icons">
          <FooterIcon className="footer__icon facebook" href="/" />
          <FooterIcon className="footer__icon instagram" href="/" />
        </div>
      </div>
      {/* </Container> */}
    </footer>
  );
};

export default Footer;
