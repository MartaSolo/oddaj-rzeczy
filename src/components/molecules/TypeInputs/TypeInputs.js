import Radio from "../../atoms/Radio";
import "./TypeInputs.scss";

const TypeInputs = ({ setType }) => {
  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className="type__inputs">
      <h3 className="type__inputs-title">Zaznacz co chcesz oddać:</h3>
      <Radio
        divClassName="type__input"
        inuptClassName="type__input-radio"
        inputName="type"
        inputId="clothesReusable"
        inputValue="clothesReusable"
        onChange={handleChange}
        labelClassName="type__input-label"
        labelName="type"
        labelhtmlFor="clothesReusable"
        labeltext="ubrania, które nadają się do ponownego użycia"
      />
      <Radio
        divClassName="type__input"
        inuptClassName="type__input-radio"
        inputName="type"
        inputId="clothesUnreusable"
        inputValue="clothesUnreusable"
        onChange={handleChange}
        labelClassName="type__input-label"
        labelName="type"
        labelhtmlFor="clothesUnreusable"
        labeltext="ubrania, do wyrzucenia"
      />
      <Radio
        divClassName="type__input"
        inuptClassName="type__input-radio"
        inputName="type"
        inputId="toys"
        inputValue="toys"
        onChange={handleChange}
        labelClassName="type__input-label"
        labelName="type"
        labelhtmlFor="toys"
        labeltext="zabawki"
      />
      <Radio
        divClassName="type__input"
        inuptClassName="type__input-radio"
        inputName="type"
        inputId="books"
        inputValue="books"
        onChange={handleChange}
        labelClassName="type__input-label"
        labelName="type"
        labelhtmlFor="books"
        labeltext="książki"
      />
      <Radio
        divClassName="type__input"
        inuptClassName="type__input-radio"
        inputName="type"
        inputId="others"
        inputValue="others"
        onChange={handleChange}
        labelClassName="type__input-label"
        labelName="type"
        labelhtmlFor="others"
        labeltext="inne"
      />
    </div>
  );
};

export default TypeInputs;