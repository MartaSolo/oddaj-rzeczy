import React from "react";
import "./Header.scss";
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <div className="header__auth">
        <NavLink to="/login" className="header_auth-link">
          Zaloguj
        </NavLink>
        <NavLink to="/register" className="header_auth-link">
          Załóż konto
        </NavLink>
      </div>
    </header>
  );
};
