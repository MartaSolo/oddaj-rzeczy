import "./LogInForm.scss";

const LogInForm = () => {
  return (
    <form className="login__content-form">
      <div className="contact__form-inputs">
        <div className="contact__form-input">
          <label className="login__input-label" htmlFor="email">
            Email
          </label>
          <input
            className="login__input-input"
            type="email"
            id="email"
            name="email"
          ></input>
        </div>
        <div className="contact__form-input">
          <label className="login__input-label" htmlFor="password">
            Hasło
          </label>
          <input
            className="login__input-input"
            type="password"
            id="password"
            name="password"
          ></input>
        </div>
      </div>
    </form>
  );
};

export default LogInForm;
