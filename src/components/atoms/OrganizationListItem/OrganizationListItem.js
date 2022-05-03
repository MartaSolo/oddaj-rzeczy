import "./OrganizationListItem.scss";

const OrganizationListItem = ({ object }) => {
  return (
    <li className="organizations__listItem">
      <h5 className="organizations__listItem-name">{object.name}</h5>

      <div className="organizations__listItem-content">
        <p className="organizations__listItem-description">
          {object.description}
        </p>

        <div className="organizations__listItem-items">
          {object.collectedItems.map((item, index) => {
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
