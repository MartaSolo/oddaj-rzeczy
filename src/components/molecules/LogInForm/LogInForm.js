import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLink from "../../atoms/AuthLink";
import regexEmail from "../../../utils/regexEmail";
// ---------------------
import { useUserAuth } from "../../../context/UserAuthContext";
// ---------------------
import "./LogInForm.scss";

const LogInForm = () => {
  const [logInForm, setLogInForm] = useState({ email: "", password: "" });
  const [logInFormError, setLogInFormError] = useState({
    email: "",
    password: "",
    firebaseAuth: "",
  });

  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLogInForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value !== "") {
      setLogInFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleEmailBlur = () => {
    if (logInForm.email.length === 0 || !regexEmail.test(logInForm.email)) {
      setLogInFormError((prev) => ({
        ...prev,
        email: "Podany email jest nieprawidłowy!",
      }));
    }
  };

  const handlePasswordBlur = () => {
    if (logInForm.password.length < 6) {
      setLogInFormError((prev) => ({
        ...prev,
        password: "Podane hasło jest za krótkie!",
      }));
    }
  };

  const islogInFormValid = () => {
    if (
      !logInFormError.email &&
      !logInFormError.password &&
      logInForm.email &&
      logInForm.password
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log("islogInFormValid", islogInFormValid());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!islogInFormValid()) {
      return;
    }
    logIn(logInForm.email, logInForm.password)
      .then((response) => {
        navigate("/");
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error.message", error.message);
        if (error.message) {
          setLogInFormError((prev) => ({
            ...prev,
            firebaseAuth: "Podane dane są nieprawidłowe!",
          }));
        }
      });
    setLogInForm({ email: "", password: "" });
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
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
          ></input>
          {logInFormError.password && (
            <span className="login__error-password">
              {logInFormError.password}
            </span>
          )}
        </div>
        {/* ------------------------------ */}
        <span className="login__error-form">{logInFormError.firebaseAuth}</span>
        {/* ------------------------------ */}
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
