import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./HeaderAuthUser.scss";

const HeaderAuthUser = () => {
  const { user, logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/logout");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="header__auth user">
      {user.email && (
        <p className="header__auth user-name">Cześć {user.email}</p>
      )}
      <div className="header_auth-links user">
        <HashLink
          smooth
          to="/oddaj-rzeczy#form"
          className="header_auth-form user"
        >
          Oddaj rzeczy
        </HashLink>

        <button className="header_auth-logout" onClick={handleLogOut}>
          Wyloguj
        </button>
      </div>
    </div>
  );
};

export default HeaderAuthUser;
