import "./FooterIcon.scss";

const FooterIcon = ({ linkClassName, href, divClassName }) => {
  return (
    <a className={linkClassName} href={href}>
      <div className={divClassName}></div>
    </a>
  );
};

export default FooterIcon;
// const FooterIcon = ({ linkClassName, href, imgClassName, scr, alt }) => {
//   return (
//     <a className={linkClassName} href={href}>
//       <img className={imgClassName} scr={scr} alt={alt} />
//     </a>
//   );
// };

// export default FooterIcon;
// import "./FooterIcon.scss";

// const FooterIcon = ({ linkClassName, href, imgClassName, alt }) => {
//   return (
//     <a className={linkClassName} href={href}>
//       <img className={imgClassName} alt={alt} />
//     </a>
//   );
// };

// export default FooterIcon;
