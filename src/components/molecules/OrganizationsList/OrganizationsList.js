import OrganizationListItem from "../../atoms/OrganizationListItem";
import "./OrganizationsList.scss";

const OrganizationsList = ({ organizationsData }) => {
  return (
    <ul className="organizations__list">
      {organizationsData.map((organization) => {
        return organization.objects.map((object) => {
          return <OrganizationListItem key={object.id} object={object} />;
        });
      })}
    </ul>
  );
};

export default OrganizationsList;
