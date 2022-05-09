import AuthLink from "../../atoms/AuthLink";
import "./HeaderAuthUser.scss";

const HeaderAuthUser = () => {
  return (
    <div className="header__auth user">
      <p className="header__auth user-name">Cześć user@gmail.com</p>
      <div className="header_auth-links user">
        <AuthLink
          to="/oddaj-rzeczy"
          className="header_auth-link user"
          text="Oddaj rzeczy"
        />
        <AuthLink
          to="/logout"
          className="header_auth-link user"
          text="Wyloguj"
        />
      </div>
    </div>
  );
};

export default HeaderAuthUser;
