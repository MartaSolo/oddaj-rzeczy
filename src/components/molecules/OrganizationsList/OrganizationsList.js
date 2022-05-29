import { useState, useEffect } from "react";
import OrganizationListItem from "../../atoms/OrganizationListItem";
import Pagination from "../../atoms/Pagination";
import "./OrganizationsList.scss";

const OrganizationsList = ({
  organizationsData,
  currentPage,
  setCurrentPage,
}) => {
  const [organizations, setOrganizations] = useState([]);
  const [selectedOrganizations, setSelectedOrganizations] = useState([]);

  const [itemsPerPage] = useState(3);
  const [totalPages, setTotalpages] = useState(0);

  useEffect(() => {
    const organizationsArray = () => {
      return organizationsData.map((organization) => {
        return organization.objects;
      });
    };
    setOrganizations(organizationsArray().flat());
  }, [organizationsData]);

  useEffect(() => {
    setTotalpages(Math.ceil(organizations.length / itemsPerPage));
  }, [organizations, itemsPerPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  useEffect(() => {
    setSelectedOrganizations(() => {
      return organizations.slice(startIndex, endIndex);
    });
  }, [organizations, currentPage, startIndex, endIndex]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="organizations__list">
      <ul className="organizations__list-list">
        {selectedOrganizations.map((organization) => {
          return (
            <OrganizationListItem
              key={organization.id}
              organization={organization}
            />
          );
        })}
      </ul>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        organizations={organizations}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default OrganizationsList;
