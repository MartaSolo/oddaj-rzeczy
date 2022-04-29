import "./BgImage.scss";

const BgImage = ({ divClassName, scr, alt, imgClassName }) => {
  return (
    <div className={divClassName}>
      <img src={scr} alt={alt} className={imgClassName} />
    </div>
  );
};

export default BgImage;

// const BgImage = ({ scr, alt, clasaName }) => {
//   return (
//     <img
//       src={require("../../../assets/home-hero-image.jpg")}
//       alt="box with stuff"
//       className="start__image-img"
//     />
//   );
// };

// export default BgImage;
