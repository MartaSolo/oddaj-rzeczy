import React from "react";
import AuthLink from "../../atoms/AuthLink";
import "./HeaderAuth.scss";

const HeaderAuth = () => {
  return (
    <div className="header__auth">
      <AuthLink to="/login" text="Zaloguj" />
      <AuthLink to="/register" text="Załóż konto" />
    </div>
  );
};

export default HeaderAuth;
