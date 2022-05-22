import FooterIcon from "../../atoms/FooterIcon";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-icons">
          <FooterIcon
            linkClassName="footer__icon-link"
            href="/"
            divClassName="footer__icon-icon facebook"
          />
          <FooterIcon
            linkClassName="footer__icon-link"
            href="/"
            divClassName="footer__icon-icon instagram"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
