import Decoration from "../../atoms/Decoration";
import AuthLink from "../../atoms/AuthLink";
import Header from "../../organisms/Header";
import LogInForm from "../../molecules/LogInForm";
import "./LogIn.scss";

const LogIn = () => {
  return (
    <>
      <Header />
      <section className="login">
        <div className="login__content">
          <h1 className="login__content-title">Zaloguj się</h1>
          <Decoration className="login__content-decoration" />
          <LogInForm />
        </div>
        <div className="login__content-buttons">
          <AuthLink
            to="/register"
            className="login__button-register"
            text="Załóż konto"
          />
          <AuthLink
            to="/login"
            className="login__button-login"
            text="Zaloguj się"
          />
        </div>
      </section>
    </>
  );
};

export default LogIn;
