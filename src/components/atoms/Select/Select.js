import "./Select.scss";

const Select = ({
  divClassName,
  selectClassName,
  selectName,
  selectId,
  onChange,
  options,
  optionClassName,
}) => {
  return (
    <div className={divClassName}>
      <select
        className={selectClassName}
        name={selectName}
        id={selectId}
        onChange={onChange}
      >
        {options.map((option) => {
          <option className={optionClassName} value={option} key={option}>
            {option}
          </option>;
        })}
      </select>
    </div>
  );
};

export default Select;
