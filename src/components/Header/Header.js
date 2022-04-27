import React from "react";
import "./Header.scss";
import { NavBar } from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <NavBar />
      <div>
        <NavLink to="/login">Zaloguj</NavLink>
        <NavLink to="/register">Załóż konto</NavLink>
      </div>
    </header>
  );
};
