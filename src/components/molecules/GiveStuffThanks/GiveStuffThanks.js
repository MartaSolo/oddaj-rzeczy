import Decoration from "../../atoms/Decoration";
import "./iveStuffThanks.scss";

const GiveStuffThanks = () => {
  return (
    <div className="givestuff__thanks">
      <p className="givestuff__thanks-text">{`Dziękujemy za przesłanie formularza\n Na maila prześlemy wszelkie\n informacje o odbiorze`}</p>
      <Decoration className="givestuff__thanks-decoration" />
    </div>
  );
};

export default GiveStuffThanks;
