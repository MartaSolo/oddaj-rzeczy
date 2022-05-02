import { NavLink } from "react-router-dom";
import "./AuthLink.scss";

const AuthLink = ({ to, text, className }) => {
  return (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  );
};

export default AuthLink;
