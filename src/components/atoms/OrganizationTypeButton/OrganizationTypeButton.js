import "./OrganizationTypeButton.scss";

const OrganizationTypeButton = ({ label, value }) => {
  return (
    <div className="organizations__input">
      <label className="organizations__input-label" name="type" htmlFor={value}>
        {label}
      </label>
      <input
        className="organizations__input-radio"
        type="radio"
        name="type"
        value={value}
        id={value}
      ></input>
    </div>
  );
};

export default OrganizationTypeButton;
