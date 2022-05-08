import Decoration from "../../atoms/Decoration";
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
      </section>
    </>
  );
};

export default LogIn;
