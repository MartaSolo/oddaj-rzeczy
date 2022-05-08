import { useState } from "react";
import AuthLink from "../../atoms/AuthLink";
import regexEmail from "../../../utils/regexEmail";
import "./LogInForm.scss";

const LogInForm = () => {
  const [logInForm, setLogInForm] = useState({ email: "", password: "" });
  // console.log("logInForm", logInForm);
  const [logInFormError, setLogInFormError] = useState({
    email: "",
    password: "",
  });
  // console.log("logInFormError", logInFormError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogInForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const logInFormValidation = () => {
    let isValid = true;

    if (logInForm.email.length === 0 || !regexEmail.test(logInForm.email)) {
      setLogInFormError((prev) => {
        return { ...prev, email: "Podany email jest nieprawidłowy!" };
      });
      isValid = false;
    }
    if (logInForm.password.length < 6) {
      setLogInFormError((prev) => {
        return {
          ...prev,
          password: "Podane hasło jest za krótkie!",
        };
      });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = logInFormValidation();
    if (isValid) {
      // send data to API
      setLogInForm({ email: "", password: "" });
      setLogInFormError({ email: "", password: "" });
    }
  };

  return (
    <form className="login__content-form" onSubmit={handleSubmit}>
      <div className="login__form-inputs">
        <div className="login__form-input">
          <label className="login__input-label" htmlFor="email">
            Email
          </label>
          <input
            className={
              logInFormError.email
                ? "login__input-input error"
                : "login__input-input"
            }
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            value={logInForm.email}
            onChange={handleChange}
          ></input>
          {logInFormError.email && (
            <span className="login__error-email">{logInFormError.email}</span>
          )}
        </div>
        <div className="login__form-input">
          <label className="login__input-label" htmlFor="password">
            Hasło
          </label>
          <input
            className={
              logInFormError.password
                ? "login__input-input error"
                : "login__input-input"
            }
            type="password"
            id="current-password"
            name="password"
            autoComplete="current-password"
            value={logInForm.password}
            onChange={handleChange}
          ></input>
          {logInFormError.password && (
            <span className="login__error-password">
              {logInFormError.password}
            </span>
          )}
        </div>
      </div>
      <div className="login__form-buttons">
        <AuthLink
          to="/register"
          className="login__button-register"
          text="Załóż konto"
        />
        <button className="login__button-login" type="submit">
          Zaloguj się
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
