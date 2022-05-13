import Select from "../../atoms/Select";
import "./LocalizationSelect.scss";

const LocalizationSelect = ({ localization, setLocalization }) => {
  const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const handleChange = (e) => {
    setLocalization(e.target.value);
  };
  return (
    <div className="localization__select">
      <h3 className="localization__select-title">Lokalizacja:</h3>

      <Select
        selectClassName="localization__select-select"
        selectId="localization"
        selectName="localization"
        value={localization}
        onChange={handleChange}
        options={options}
        optionClassName="localization__select-option"
      />
    </div>
  );
};

export default LocalizationSelect;
