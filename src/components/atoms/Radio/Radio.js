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
      <label className={labelClassName} name={labelName} htmlFor={labelhtmlFor}>
        <input
          className={inuptClassName}
          type="radio"
          name={inputName}
          id={inputId}
          value={inputValue}
          onChange={onChange}
        ></input>
        <span className="checkmark"></span>
        {labeltext}
      </label>
    </div>
  );
};

export default Radio;
