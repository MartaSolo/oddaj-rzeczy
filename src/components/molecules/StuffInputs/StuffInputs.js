import Checkbox from "../../atoms/Checkbox";
import Radio from "../../atoms/Radio";
import "./StuffInputs.scss";

const StuffInputs = ({ setStuff }) => {
  const handleChange = (e) => {
    setStuff(e.target.value);
  };

  return (
    <div className="stuff__inputs">
      <h3 className="stuff__inputs-title">Zaznacz co chcesz oddać:</h3>
      <Radio
        divClassName="stuff__input"
        inuptClassName="stuff__input-radio"
        inputName="stuff"
        inputId="clothesReusable"
        inputValue="clothesReusable"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelName="stuff"
        labelhtmlFor="clothesReusable"
        labeltext="ubrania, które nadają się do ponownego użycia"
      />
      <Radio
        divClassName="stuff__input"
        inuptClassName="stuff__input-radio"
        inputName="stuff"
        inputId="clothesUnreusable"
        inputValue="clothesUnreusable"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelName="stuff"
        labelhtmlFor="clothesUnreusable"
        labeltext="ubrania, do wyrzucenia"
      />
      <Radio
        divClassName="stuff__input"
        inuptClassName="stuff__input-radio"
        inputName="stuff"
        inputId="toys"
        inputValue="toys"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelName="stuff"
        labelhtmlFor="toys"
        labeltext="zabawki"
      />
      <Radio
        divClassName="stuff__input"
        inuptClassName="stuff__input-radio"
        inputName="stuff"
        inputId="books"
        inputValue="books"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelName="stuff"
        labelhtmlFor="books"
        labeltext="książki"
      />
      <Radio
        divClassName="stuff__input"
        inuptClassName="stuff__input-radio"
        inputName="stuff"
        inputId="others"
        inputValue="others"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelName="stuff"
        labelhtmlFor="others"
        labeltext="inne"
      />
    </div>
  );
};

export default StuffInputs;
