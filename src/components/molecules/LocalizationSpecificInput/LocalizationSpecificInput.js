import "./LocalizationSpecificInput.scss";

const LocalizationSpecificInput = ({
  localizationSpecific,
  setLocalizationSpecific,
}) => {
  return (
    <div className="localizationspec__input">
      <lable
        className="localizationspec__input-title"
        name="localizationSpecific"
      >
        Wpisz nazwę konkretnej organizacji (opcjonalnie)
      </lable>
      <input
        className="localizationspec__input-input"
        name="localizationSpecific"
        id="localizationSpecific"
        type="text"
        value={localizationSpecific}
        onChange={(e) => setLocalizationSpecific(e.target.value)}
      ></input>
    </div>
  );
};

export default LocalizationSpecificInput;
