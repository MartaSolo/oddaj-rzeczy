import organizations from "./organizationsData";

export const getOragnization = (type) => {
  return organizations.filter((organization) => organization.type === type);
};

// console.log(getOragnization("fundation"));
// console.log(getOragnization("non-govermental organization"));
// console.log(getOragnization("localCollection"));
