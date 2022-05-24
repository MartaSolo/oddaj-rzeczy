import Select from "../../atoms/Select";
import "./BagsSelect.scss";

const BagsSelect = ({ bags, setBags }) => {
  const options = [1, 2, 3, 4, 5];
  const handleChange = (e) => {
    setBags(e.target.value);
  };
  return (
    <div className="bags__select">
      <h3 className="bags__select-title">
        {`Podaj liczbę 60l worków,\nw które spakowałeś/aś rzeczy:`}
      </h3>

      <div className="bags__select-content">
        <p className="bags__select-subtitle">Liczba 60l worków:</p>
        <Select
          selectClassName="bags__select-select"
          selectId="bags"
          selectName="bags"
          value={bags}
          onChange={handleChange}
          options={options}
          optionClassName="bags__select-option"
        />
      </div>
    </div>
  );
};

export default BagsSelect;
