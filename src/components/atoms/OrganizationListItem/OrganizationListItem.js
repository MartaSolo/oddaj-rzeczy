import "./OrganizationListItem.scss";

const OrganizationListItem = ({ object }) => {
  return (
    <li className="organizations__listItem">
      <h5 className="organizations__listItem-name">{object.name}</h5>

      <div className="organizations__listItem-content">
        <p className="organizations__listItem-description">
          {object.description}
        </p>
        {object.collectedItems.map((item, index) => {
          return (
            <span key={index} className="organizations__listItem-item">
              {item},{" "}
            </span>
          );
        })}
      </div>
    </li>
  );
};

export default OrganizationListItem;
