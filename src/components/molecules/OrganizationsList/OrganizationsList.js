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
  // console.log("organizations", organizations);
  const [selectedOrganizations, setSelectedOrganizations] = useState([]);
  console.log("selectedOrganizations", selectedOrganizations);

  const [itemsPerPage] = useState(3);
  const [totalPages, setTotalpages] = useState(0);
  // console.log("totalPages", totalPages);

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
  }, [organizations]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  console.log("startIndex", startIndex);
  const endIndex = currentPage * itemsPerPage;
  console.log("endIndex", endIndex);

  useEffect(() => {
    setSelectedOrganizations(() => {
      return organizations.slice(startIndex, endIndex);
    });
  }, [organizations]);

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
// import { useState, useEffect } from "react";
// import OrganizationListItem from "../../atoms/OrganizationListItem";
// import Pagination from "../../atoms/Pagination";
// import "./OrganizationsList.scss";

// const OrganizationsList = ({ organizationsData }) => {
//   const [organizations, setOrganizations] = useState([]);
//   // console.log("organizations", organizations);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage] = useState(3);
//   const [totalPages, setTotalpages] = useState(0);
//   // console.log("totalPages", totalPages);

//   useEffect(() => {
//     const organizationsArray = () => {
//       return organizationsData.map((organization) => {
//         return organization.objects;
//       });
//     };
//     setOrganizations(organizationsArray().flat());
//   }, [organizationsData]);

//   useEffect(() => {
//     setTotalpages(Math.ceil(organizations.length / itemsPerPage));
//   }, [organizations]);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   // console.log("startIndex", startIndex);
//   const endIndex = currentPage * itemsPerPage;
//   // console.log("endIndex", endIndex);
//   const selectedOrganizations = organizations.slice(startIndex, endIndex);
//   // console.log("selectedOrganizations", selectedOrganizations);

//   const handlePageChange = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="organizations__list">
//       <ul className="organizations__list-list">
//         {selectedOrganizations.map((organization) => {
//           return (
//             <OrganizationListItem
//               key={organization.id}
//               organization={organization}
//             />
//           );
//         })}
//       </ul>
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}
//       />
//     </div>
//   );
// };

// export default OrganizationsList;
