import GiveStuffButton from "../../atoms/GiveStuffButton";
import "./GiveStuffButtons.scss";

const GiveStuffButtons = ({ step, setStep }) => {
  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  return (
    <div className="givestuff__form-buttons">
      {step >= 2 && (
        <GiveStuffButton
          className="givestuff__form-button prev"
          type="button"
          text="Wstecz"
          onClick={handlePrevStep}
        />
      )}

      {step < 5 && (
        <GiveStuffButton
          className="givestuff__form-button next"
          type="button"
          text="Dalej"
          onClick={handleNextStep}
        />
      )}

      {step === 5 && (
        <GiveStuffButton
          className="givestuff__form-button submit"
          type="submit"
          text="Potwierdzam"
        />
      )}
    </div>
  );
};

export default GiveStuffButtons;
