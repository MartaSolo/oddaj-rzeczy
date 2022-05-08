import Decoration from "../../atoms/Decoration";
import Header from "../../organisms/Header";
import RegisterForm from "../../molecules/RegisterForm";
import "./Register.scss";

const Register = () => {
  return (
    <>
      <Header />
      <section className="register">
        <div className="register__content">
          <h1 className="register__content-title">Załóż konto</h1>
          <Decoration className="register__content-decoration" />
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

export default Register;
