import { NavLink } from "react-router-dom";
import "./AuthLink.scss";

const AuthLink = ({ to, text }) => {
  return (
    <NavLink to={to} className="header_auth-link">
      {text}
    </NavLink>
  );
};

export default AuthLink;
