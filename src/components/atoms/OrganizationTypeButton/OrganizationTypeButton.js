import "./OrganizationTypeButton.scss";

const OrganizationTypeButton = ({ text }) => {
  return <button className="organizations__content-button">{text}</button>;
};

export default OrganizationTypeButton;
// import "./OrganizationTypeButton.scss";

// const OrganizationTypeButton = ({ text, handleClick }) => {
//   return (
//     <button className="organizations__content-button" onClick={handleClick}>
//       {text}
//     </button>
//   );
// };

// export default OrganizationTypeButton;
