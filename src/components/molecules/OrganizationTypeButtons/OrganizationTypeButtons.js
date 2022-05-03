import OrganizationTypeButton from "../../atoms/OrganizationTypeButton";
import "./OrganizationTypeButtons.scss";

const OrganizationTypeButtons = ({ organizationType, setOrganizationType }) => {
  const handleChange = (e) => {
    setOrganizationType(e.target.value);
  };

  return (
    <div className="organizations__content-buttons" onChange={handleChange}>
      <OrganizationTypeButton
        organizationType={organizationType}
        label={`Fundacjom`}
        value="fundations"
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

// rozwiązanie z buttonami - działa, nie ma komponnetu organizationTypeButton

// import OrganizationTypeButton from "../../atoms/OrganizationTypeButton";
// import "./OrganizationTypeButtons";

// const OrganizationTypeButtons = ({ setOrganizationType }) => {
//   return (
//     <div className="organizations__content-buttons">
//       <button
//         className="organizations__content-buttons"
//         onClick={() => setOrganizationType("fundation")}
//       >
//         Fundacjom
//       </button>
//       <button
//         className="organizations__content-buttons"
//         onClick={() => setOrganizationType("non-govermental organization")}
//       >
//         Organizacjom pozarządowym
//       </button>
//       <button
//         className="organizations__content-buttons"
//         onClick={() => setOrganizationType("localCollection")}
//       >
//         Zbiórkom lokalnym
//       </button>
//     </div>
//   );
// };

// export default OrganizationTypeButtons;
