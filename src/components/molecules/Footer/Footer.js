import FooterIcon from "../../atoms/FooterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-icons">
          <FooterIcon className="footer__icon facebook" href="/" />
          <FooterIcon className="footer__icon instagram" href="/" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
