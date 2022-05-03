import { useState, useEffect } from "react";
import getOrganizations from "../../../data/getOrganizations";
import Container from "../../atoms/Container";
import Decoration from "../../atoms/Decoration";
import OrganizationTypeButtons from "../../molecules/OrganizationTypeButtons";
import "./Organizations.scss";

const Organizations = () => {
  const [organizationType, setOrganizationType] = useState("fundation");
  console.log("organizationType", organizationType);

  const [organizationsData, setOrganizationsData] = useState([]);
  console.log("organizationsData", organizationsData);

  useEffect(() => {
    setOrganizationsData(getOrganizations(organizationType));
  }, [organizationType]);

  return (
    <section id="organizations" className="organizations">
      <Container>
        <h2 className="organizations__content-title">Komu pomagamy?</h2>
        <Decoration className="organizations__content-decoration" />

        <OrganizationTypeButtons
          organizationType={organizationType}
          setOrganizationType={setOrganizationType}
        />

        {organizationsData.map((organization) => {
          return (
            <p className="organizations__content-description">
              {organization.description}
            </p>
          );
        })}
      </Container>
    </section>
  );
};

export default Organizations;
