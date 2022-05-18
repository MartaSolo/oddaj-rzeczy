import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLink from "../../atoms/AuthLink";
import regexEmail from "../../../utils/regexEmail";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./RegisterForm.scss";

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    password2: "",
  });
  // console.log("registerForm", registerForm);

  const [registerFormError, setRegisterFormError] = useState({
    email: "",
    password: "",
    password2: "",
    firebaseAuth: "",
  });
  // console.log("registerFormError", registerFormError);

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setRegisterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value !== "") {
      setRegisterFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleEmailBlur = () => {
    if (
      registerForm.email.length === 0 ||
      !regexEmail.test(registerForm.email)
    ) {
      setRegisterFormError((prev) => ({
        ...prev,
        email: "Podany email jest nieprawidłowy!",
      }));
    }
  };

  const handlePasswordBlur = () => {
    if (registerForm.password.length < 6) {
      setRegisterFormError((prev) => ({
        ...prev,
        password: "Podane hasło jest za krótkie!",
      }));
    }
  };

  const handlePassword2Blur = () => {
    if (
      registerForm.password2.length === 0 ||
      registerForm.password2 !== registerForm.password
    ) {
      setRegisterFormError((prev) => ({
        ...prev,
        password2: "Podane hasła są rózne!",
      }));
    }
  };

  const isRegisterFormValid = () => {
    if (
      !registerFormError.email &&
      !registerFormError.password &&
      !registerFormError.password2 &&
      registerForm.email &&
      registerForm.password &&
      registerForm.password2
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isRegisterFormValid()) {
      return;
    }
    signUp(registerForm.email, registerForm.password)
      .then((response) => {
        navigate("/");
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error.message", error.message);
        if (error.message) {
          setRegisterFormError((prev) => ({
            ...prev,
            firebaseAuth: "Podane dane są nieprawidłowe!",
          }));
        }
      });
    setRegisterForm({ email: "", password: "", password2: "" });
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
            onBlur={handleEmailBlur}
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
            onBlur={handlePasswordBlur}
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
            onBlur={handlePassword2Blur}
          ></input>
          {registerFormError.password2 && (
            <span className="register__error-password2">
              {registerFormError.password2}
            </span>
          )}
        </div>
        {/* ------------------------------ */}
        <span className="register__error-form">
          {registerFormError.firebaseAuth}
        </span>
        {/* ------------------------------ */}
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
          disabled={!isRegisterFormValid() || registerFormError.firebaseAuth}
        >
          Załóż konto
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;
