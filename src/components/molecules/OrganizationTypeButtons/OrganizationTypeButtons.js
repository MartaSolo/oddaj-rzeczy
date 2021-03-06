import OrganizationTypeButton from "../../atoms/OrganizationTypeButton";
import "./OrganizationTypeButtons.scss";

const OrganizationTypeButtons = ({
  organizationType,
  setOrganizationType,
  setCurrentPage,
}) => {
  const handleChange = (e) => {
    setOrganizationType(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="organizations__content-input" onChange={handleChange}>
      <OrganizationTypeButton
        organizationType={organizationType}
        label={`Fundacjom`}
        value="fundation"
      />
      <OrganizationTypeButton
        organizationType={organizationType}
        label={`Organizacjom\npozarządowym`}
        value="non-govermental organization"
      />
      <OrganizationTypeButton
        organizationType={organizationType}
        label={`Zbiórkom\nlokalnym`}
        value="localCollection"
      />
    </div>
  );
};

export default OrganizationTypeButtons;
