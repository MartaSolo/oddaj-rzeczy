import "./LocalizationSpecificInput.scss";

const LocalizationSpecificInput = ({
  localizationSpecific,
  setLocalizationSpecific,
}) => {
  return (
    <div className="localizationspec__input">
      <label
        className="localizationspec__input-title"
        name="localizationSpecific"
      >
        {`Wpisz nazwę konkretnej organizacji\n(opcjonalnie)`}
      </label>
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
