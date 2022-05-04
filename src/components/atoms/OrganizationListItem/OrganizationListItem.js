import "./OrganizationListItem.scss";

const OrganizationListItem = ({ organization }) => {
  return (
    <li className="organizations__listItem">
      <h5 className="organizations__listItem-name">{organization.name}</h5>

      <div className="organizations__listItem-content">
        <p className="organizations__listItem-description">
          {organization.description}
        </p>

        <div className="organizations__listItem-items">
          {organization.collectedItems.map((item, index) => {
            return (
              <p key={index} className="organizations__listItem-item">
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </li>
  );
};

export default OrganizationListItem;
