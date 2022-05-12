import "./GiveStuffButton.scss";

const GiveStuffButton = ({ className, type, text, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default GiveStuffButton;
