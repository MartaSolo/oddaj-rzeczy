import { useState } from "react";
import Container from "../../atoms/Container";
import Decoration from "../../atoms/Decoration";
import OrganizationTypeButton from "../../atoms/OrganizationTypeButton";
import organizations from "../../../data/organizationsData";
import getOrganizations from "../../../data/getOrganizations";
import "./Organizations.scss";

const Organizations = () => {
  const [organizationType, setOrganizationType] = useState("fundation");
  // console.log("organizationType", organizationType);
  console.log(organizationType);
  const [organizationData, setOrganizationData] = useState([]);

  return (
    <section id="organizations" className="organizations">
      <Container>
        <h2 className="organizations__content-title">Komu pomagamy?</h2>
        <Decoration className="organizations__content-decoration" />

        <div className="organizations__content-buttons">
          <OrganizationTypeButton
            text={`Fundacjom`}
            onClick={() => setOrganizationType("fundation")}
          />
          <OrganizationTypeButton
            text={`Organizacjom\npozarządowym`}
            onClick={() => setOrganizationType("non-govermental organization")}
          />
          <OrganizationTypeButton
            text={`Lokalnym\nzbiórkom`}
            onClick={() => setOrganizationType("localCollection")}
          />
        </div>
      </Container>
    </section>
  );
};

export default Organizations;
