import organizations from "./organizationsData";

const getOragnization = (type) => {
  return organizations.filter((organization) => organization.type === type);
};

export default getOragnization;

// console.log(getOragnization("fundation"));
// console.log(getOragnization("non-govermental organization"));
// console.log(getOragnization("localCollection"));
