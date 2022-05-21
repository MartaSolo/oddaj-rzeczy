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
            imgClassName="footer__icon-img facebook"
            alt="facebook icon"
          />
          <FooterIcon
            linkClassName="footer__icon-link"
            href="/"
            imgClassName="footer__icon-img instagram"
            alt="instagram icon"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
