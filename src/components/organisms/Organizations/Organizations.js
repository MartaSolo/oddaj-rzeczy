import { useState, useEffect } from "react";
import Container from "../../atoms/Container";
import Decoration from "../../atoms/Decoration";
import OrganizationTypeButtons from "../../molecules/OrganizationTypeButtons";
import OrganizationsList from "../../molecules/OrganizationsList";
import { db } from "../../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./Organizations.scss";

const Organizations = () => {
  const [organizationType, setOrganizationType] = useState("fundation");
  const [organizationsData, setOrganizationsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const getAllOrganizations = async () => {
      try {
        const data = await getDocs(collection(db, "organizations"));
        const allOrganizations = data.docs.map((doc) => ({ ...doc.data() }));
        const getOragnization = (type) => {
          return allOrganizations.filter(
            (organization) => organization.type === type
          );
        };
        setOrganizationsData(getOragnization(organizationType));
      } catch (error) {
        console.log(error);
      }
    };
    getAllOrganizations();
  }, [organizationType]);

  return (
    <section id="organizations" className="organizations">
      <Container>
        <h2 className="organizations__content-title">Komu pomagamy?</h2>
        <Decoration className="organizations__content-decoration" />

        <OrganizationTypeButtons
          setCurrentPage={setCurrentPage}
          organizationType={organizationType}
          setOrganizationType={setOrganizationType}
        />

        {organizationsData.map((organization) => {
          return (
            <p
              className="organizations__content-description"
              key={organization.type}
            >
              {organization.description}
            </p>
          );
        })}

        <OrganizationsList
          organizationsData={organizationsData}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </section>
  );
};

export default Organizations;
