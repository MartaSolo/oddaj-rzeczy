import GiveStuffButton from "../../atoms/GiveStuffButton";
import "./GiveStuffButtons.scss";

const GiveStuffButtons = ({
  step,
  setStep,
  type,
  bags,
  helpGroup,
  localization,
  localizationSpecific,
  street,
  city,
  postCode,
  phone,
  date,
  time,
  note,
}) => {
  console.log("type", type);
  console.log("helpGroup", helpGroup);
  console.log("localization", localization);

  const handlePrevStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev - 1);
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setStep((prev) => prev + 1);
  };

  let checkedHelpGroup = Object.values(helpGroup).filter((el) => el === true);
  console.log("checkedHelpGroup", checkedHelpGroup);

  const isNextBtnDisabled = () => {
    if (step === 1 && !type) {
      return true;
    }
    if (step === 2 && !bags) {
      return true;
    }
    if (step === 3 && (checkedHelpGroup.length === 0 || !localization)) {
      return true;
    }
    if (
      step === 4 &&
      (!street || !city || !postCode || !phone || !date || !time)
    ) {
      return true;
    }
  };

  return (
    <div className="givestuff__form-buttons">
      {step >= 2 && step !== 6 && (
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
          disabled={isNextBtnDisabled()}
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
