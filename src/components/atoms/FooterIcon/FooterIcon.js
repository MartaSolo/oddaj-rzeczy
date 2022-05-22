import "./FooterIcon.scss";

const FooterIcon = ({ linkClassName, href, divClassName }) => {
  return (
    <a className={linkClassName} href={href}>
      <div className={divClassName}></div>
    </a>
  );
};

export default FooterIcon;
