import GiveStuffButton from "../../atoms/GiveStuffButton";
import "./GiveStuffButtons.scss";

const GiveStuffButtons = ({ step, setStep }) => {
  return (
    <div className="givestuff__form-buttons">
      <GiveStuffButton
        className="givestuff__form-button back"
        text="Wstecz"
        onClick={() => setStep((prev) => prev - 1)}
      />
      <GiveStuffButton
        className="givestuff__form-button next"
        text="Dalej"
        onClick={() => setStep((prev) => prev + 1)}
      />
      <GiveStuffButton
        className="givestuff__form-button submit"
        text="Potwierdzam"
        onClick={() => console.log("submit button")}
      />
    </div>
  );
};

export default GiveStuffButtons;
