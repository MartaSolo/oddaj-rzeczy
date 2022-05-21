import "./FooterIcon.scss";

const FooterIcon = ({ linkClassName, href, imgClassName, alt }) => {
  return (
    <a className={linkClassName} href={href}>
      <img className={imgClassName} alt={alt} />
    </a>
  );
};

export default FooterIcon;
