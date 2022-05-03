import OrganizationTypeButton from "../../atoms/OrganizationTypeButton";
import "./OrganizationTypeButtons";

const OrganizationTypeButtons = ({ setOrganizationType }) => {
  return (
    <div className="organizations__content-buttons">
      <button
        className="organizations__content-buttons"
        onClick={() => setOrganizationType("fundation")}
      >
        Fundacjom
      </button>
      <button
        className="organizations__content-buttons"
        onClick={() => setOrganizationType("non-govermental organization")}
      >
        Organizacjom pozarządowym
      </button>
      <button
        className="organizations__content-buttons"
        onClick={() => setOrganizationType("localCollection")}
      >
        Zbiórkom lokalnym
      </button>
    </div>
  );
};

export default OrganizationTypeButtons;
