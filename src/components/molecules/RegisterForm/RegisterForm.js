import { useState } from "react";
import AuthLink from "../../atoms/AuthLink";
import regexEmail from "../../../utils/regexEmail";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  console.log("registerForm", registerForm);
  const [registerFormError, setRegisterFormError] = useState({
    email: "",
    password: "",
    password2: "",
  });
  console.log("registerFormError", registerFormError);

  const [registerFormTouched, setRegisterFormTouched] = useState({
    email: false,
    password: false,
    password2: false,
  });
  console.log("registerFormTouched", registerFormTouched);

  const handleChange = (e) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value !== "") {
      setRegisterFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "email":
        setRegisterFormTouched((prev) => ({ ...prev, email: true }));
        if (
          registerForm.email.length === 0 ||
          !regexEmail.test(registerForm.email)
        ) {
          setRegisterFormError((prev) => ({
            ...prev,
            email: "Podany email jest nieprawidłowy!",
          }));
        }
        break;
      case "password":
        setRegisterFormTouched((prev) => ({ ...prev, password: true }));
        if (registerForm.password.length < 6) {
          setRegisterFormError((prev) => ({
            ...prev,
            password: "Podane hasło jest za krótkie!",
          }));
        }
        break;
      case "password2":
        setRegisterFormTouched((prev) => ({ ...prev, password2: true }));
        if (
          registerForm.password2.length === 0 ||
          registerForm.password2 !== registerForm.password
        ) {
          setRegisterFormError((prev) => ({
            ...prev,
            password2: "Podane hasła są rózne!",
          }));
        }
        break;
      default:
        console.log("input not included in the fucntion");
    }
  };

  const isRegisterFormValid = () => {
    if (
      !registerFormError.email &&
      !registerFormError.password &&
      !registerFormError.password2 &&
      registerFormTouched.email === true &&
      registerFormTouched.password === true &&
      registerFormTouched.password2 === true &&
      registerForm.email &&
      registerForm.password &&
      registerForm.password2
    ) {
      return true;
    } else {
      return false;
    }
  };
  console.log("isRegisterFormValid", isRegisterFormValid());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRegisterFormValid()) {
      return;
    }
    // send data to API
    setRegisterForm({ email: "", password: "", password2: "" });
    setRegisterFormTouched({ email: false, password: false, password2: false });
  };

  return (
    <form className="register__content-form" onSubmit={handleSubmit}>
      <div className="register__form-inputs">
        <div className="register__form-input">
          <label className="register__input-label" htmlFor="email">
            Email
          </label>
          <input
            className={
              registerFormError.email
                ? "register__input-input error"
                : "register__input-input"
            }
            type="email"
            id="email"
            name="email"
            autoComplete="username"
            value={registerForm.email}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {registerFormError.email && (
            <span className="register__error-email">
              {registerFormError.email}
            </span>
          )}
        </div>
        <div className="register__form-input">
          <label className="register__input-label" htmlFor="password">
            Hasło
          </label>
          <input
            className={
              registerFormError.password
                ? "register__input-input error"
                : "register__input-input"
            }
            type="password"
            id="current-password"
            name="password"
            autoComplete="current-password"
            value={registerForm.password}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {registerFormError.password && (
            <span className="register__error-password">
              {registerFormError.password}
            </span>
          )}
        </div>
        <div className="register__form-input">
          <label className="register__input-label" htmlFor="password2">
            Powtórz hasło
          </label>
          <input
            className={
              registerFormError.password2
                ? "register__input-input error"
                : "register__input-input"
            }
            type="password"
            id="current-password2"
            name="password2"
            autoComplete="current-password"
            value={registerForm.password2}
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
          {registerFormError.password2 && (
            <span className="register__error-password2">
              {registerFormError.password2}
            </span>
          )}
        </div>
      </div>
      <div className="register__form-buttons">
        <AuthLink
          to="/login"
          className="register__button-login"
          text="Zaloguj się"
        />
        <button
          className="register__button-register"
          type="submit"
          disabled={!isRegisterFormValid()}
        >
          Załóż konto
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
