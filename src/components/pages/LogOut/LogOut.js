import { HashLink } from "react-router-hash-link";
import Decoration from "../../atoms/Decoration";
import Header from "../../organisms/Header";
import "./LogOut.scss";

const LogOut = () => {
  return (
    <>
      <Header />
      <section className="logout">
        <div className="logout__content">
          <h1 className="logout__content-title">
            {`Wylogowanie nastąpiło\npomyślnie!`}
          </h1>
          <Decoration className="logout__content-decoration" />
          <HashLink smooth to="/#top" className="logout__content-home">
            Strona główna
          </HashLink>
        </div>
      </section>
    </>
  );
};

export default LogOut;
