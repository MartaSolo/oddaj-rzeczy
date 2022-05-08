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
  //   console.log("registerForm", registerForm);
  const [registerFormError, setRegisterFormError] = useState({
    email: "",
    password: "",
    password2: "",
  });
  //   console.log("registerFormError", registerFormError);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const registerFormValidation = () => {
    let isValid = true;

    if (
      registerForm.email.length === 0 ||
      !regexEmail.test(registerForm.email)
    ) {
      setRegisterFormError((prev) => {
        return { ...prev, email: "Podany email jest nieprawidłowy!" };
      });
      isValid = false;
    }
    if (registerForm.password.length < 6) {
      setRegisterFormError((prev) => {
        return {
          ...prev,
          password: "Podane hasło jest za krótkie!",
        };
      });
      isValid = false;
    }
    if (registerForm.password2 !== registerForm.password) {
      setRegisterFormError((prev) => {
        return {
          ...prev,
          password2: "Podane hasła są rózne!",
        };
      });
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = registerFormValidation();
    if (isValid) {
      // send data to API
      setRegisterForm({ email: "", password: "", password2: "" });
      setRegisterFormError({ email: "", password: "", password2: "" });
    }
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
        <button className="register__button-register" type="submit">
          Załóż konto
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
