import "./GiveStuffButton.scss";

const GiveStuffButton = ({ className, type, text, onClick, disabled }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default GiveStuffButton;
