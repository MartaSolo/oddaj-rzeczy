import "./Radio.scss";

const Radio = ({
  divClassName,
  inuptClassName,
  inputName,
  inputId,
  inputValue,
  onChange,
  labelClassName,
  labelName,
  labelhtmlFor,
  labeltext,
}) => {
  return (
    <div className={divClassName}>
      <input
        className={inuptClassName}
        type="radio"
        name={inputName}
        id={inputId}
        value={inputValue}
        onChange={onChange}
      ></input>
      <label className={labelClassName} name={labelName} htmlFor={labelhtmlFor}>
        {labeltext}
      </label>
    </div>
  );
};

export default Radio;
