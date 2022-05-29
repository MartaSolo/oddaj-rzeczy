import "./BgImage.scss";

const BgImage = ({ divClassName, imgClassName }) => {
  return (
    <div className={divClassName}>
      <div className={imgClassName}></div>
    </div>
  );
};

export default BgImage;
