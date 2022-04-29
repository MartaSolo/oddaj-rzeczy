import { NavLink } from "react-router-dom";
import "./AuthButton";

const AuthButton = ({ to, className, text }) => {
  return (
    <NavLink to={to} className={className} style={{ whiteSpace: "pre-line" }}>
      {text}
    </NavLink>
  );
};

export default AuthButton;
