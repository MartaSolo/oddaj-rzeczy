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
  const [logInFormTouched, setLogInFormTouched] = useState({
    email: false,
    password: false,
  });
  // console.log("logInFormTouched", logInFormTouched);

  const handleChange = (e) => {
    setLogInForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value !== "") {
      setLogInFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setLogInFormTouched((prev) => ({ ...prev, email: true }));
        if (logInForm.email.length === 0 || !regexEmail.test(logInForm.email)) {
          setLogInFormError((prev) => ({
            ...prev,
            email: "Podany email jest nieprawidłowy!",
          }));
        }
        break;
      case "password":
        setLogInFormTouched((prev) => ({ ...prev, password: true }));
        if (logInForm.password.length < 6) {
          setLogInFormError((prev) => ({
            ...prev,
            password: "Podane hasło jest za krótkie!",
          }));
        }
        break;
      default:
        console.log("input not included in the fucntion");
    }
  };

  const islogInFormValid = () => {
    if (
      !logInFormError.email &&
      !logInFormError.password &&
      logInFormTouched.email === true &&
      logInFormTouched.password === true &&
      logInForm.email &&
      logInForm.password
    ) {
      return true;
    } else {
      return false;
    }
  };
  // console.log("islogInFormValid", islogInFormValid());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!islogInFormValid()) {
      return;
    }
    // send data to API
    setLogInForm({ email: "", password: "" });
    setLogInFormTouched({ email: false, password: false });
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
        <button
          className="login__button-login"
          type="submit"
          disabled={!islogInFormValid()}
        >
          Zaloguj się
        </button>
      </div>
    </form>
  );
};

export default LogInForm;
