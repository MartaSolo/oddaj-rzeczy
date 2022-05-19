import "./Select.scss";

const Select = ({
  selectClassName,
  selectName,
  selectId,
  value,
  onChange,
  options,
  optionClassName,
}) => {
  return (
    <select
      className={selectClassName}
      name={selectName}
      id={selectId}
      value={value}
      onChange={onChange}
    >
      <option className={optionClassName} hidden>
        -- Wybierz --
      </option>
      {options.map((option) => {
        return (
          <option className={optionClassName} value={option} key={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
