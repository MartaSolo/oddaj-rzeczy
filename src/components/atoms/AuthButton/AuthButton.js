import { NavLink } from "react-router-dom";
import "./AuthButton.scss";

const AuthButton = ({ to, className, text }) => {
  return (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  );
};

export default AuthButton;
