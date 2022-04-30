import "./BgImage.scss";

const BgImage = ({ divClassName, scr, alt, imgClassName }) => {
  return (
    <div className={divClassName}>
      <img src={scr} alt={alt} className={imgClassName} />
    </div>
  );
};

export default BgImage;
