import Select from "../../atoms/Select";
import "./LocationSelect.scss";

const LocationSelect = ({ location, setLocation }) => {
  const options = ["Poznań", "Warszawa", "Kraków", "Wrocław", "Katowice"];
  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div className="location__select">
      <h3 className="location__select-title">Lokalizacja:</h3>

      <Select
        selectClassName="location__select-select"
        selectId="location"
        selectName="location"
        value={location}
        onChange={handleChange}
        options={options}
        optionClassName="bags__select-option"
      />
    </div>
  );
};

export default LocationSelect;
