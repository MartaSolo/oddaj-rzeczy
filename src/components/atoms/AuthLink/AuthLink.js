import { NavLink } from "react-router-dom";

const AuthLink = ({ to, text }) => {
  return (
    <NavLink to={to} className="header_auth-link">
      {text}
    </NavLink>
  );
};

// const AuthLink = ({target, text}) => {
//   return (
//     <NavLink to="/register" className="header_auth-link">
//       Załóż konto
//     </NavLink>
//   );
// };

export default AuthLink;
