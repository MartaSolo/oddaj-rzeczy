import Checkbox from "../../atoms/Checkbox";
import "./HelpGroupCheckboxes.scss";

const HelpGroupCheckboxes = ({ helpGroup, setHelpGroup }) => {
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.checked, e.target.id);
    setHelpGroup((prev) => {
      return { ...prev, [e.target.id]: e.target.checked };
    });
  };

  return (
    <div className="helpgroups__inputs">
      <h3 className="helpgroups__inputs-title">Komu chcesz pomóc?</h3>
      <Checkbox
        divClassName="helpgroup__input"
        inuptClassName="helpgroup__input-checkbox"
        inputName="helpgroup"
        inputId="children"
        inputValue={helpGroup.children}
        onChange={handleChange}
        labelClassName="helpgroup__input-label"
        labelName="helpgroup"
        labelhtmlFor="children"
        labeltext="dzieciom"
      />
      <Checkbox
        divClassName="helpgroup__input"
        inuptClassName="helpgroup__input-checkbox"
        inputName="helpgroup"
        inputId="singleMothers"
        inputValue={helpGroup.singleMothers}
        onChange={handleChange}
        labelClassName="helpgroup__input-label"
        labelName="helpgroup"
        labelhtmlFor="singleMothers"
        labeltext="samotnym matkom"
      />
      <Checkbox
        divClassName="helpgroup__input"
        inuptClassName="helpgroup__input-checkbox"
        inputName="helpgroup"
        inputId="homelsess"
        inputValue={helpGroup.homelsess}
        onChange={handleChange}
        labelClassName="helpgroup__input-label"
        labelName="helpgroup"
        labelhtmlFor="homelsess"
        labeltext="bezdomnym"
      />
      <Checkbox
        divClassName="helpgroup__input"
        inuptClassName="helpgroup__input-checkbox"
        inputName="helpgroup"
        inputId="disabled"
        inputValue={helpGroup.disabled}
        onChange={handleChange}
        labelClassName="helpgroup__input-label"
        labelName="helpgroup"
        labelhtmlFor="disabled"
        labeltext="niepełnosprawnym"
      />
      <Checkbox
        divClassName="helpgroup__input"
        inuptClassName="helpgroup__input-checkbox"
        inputName="helpgroup"
        inputId="elderly"
        inputValue={helpGroup.elderly}
        onChange={handleChange}
        labelClassName="helpgroup__input-label"
        labelName="helpgroup"
        labelhtmlFor="elderly"
        labeltext="osobom starszym"
      />
    </div>
  );
};

export default HelpGroupCheckboxes;
