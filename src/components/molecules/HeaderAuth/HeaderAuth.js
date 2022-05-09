import AuthLink from "../../atoms/AuthLink";
import "./HeaderAuth.scss";

const HeaderAuth = () => {
  return (
    <div className="header__auth">
      <AuthLink to="/login" className="header_auth-link" text="Zaloguj" />
      <AuthLink
        to="/register"
        className="header_auth-link"
        text="Załóż konto"
      />
    </div>
  );
};

export default HeaderAuth;
