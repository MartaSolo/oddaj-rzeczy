import Container from "../../atoms/Container";
import Decoration from "../../atoms/Decoration";
import GiveStuffSteps from "../../molecules/GiveStuffSteps";
import HeaderUser from "../../organisms/HeaderUser";
import GiveStuffForm from "../../organisms/GiveStuffForm";
import Contact from "../../organisms/Contact";
import "./GiveStuff.scss";

const GiveStuff = () => {
  return (
    <section className="givestuff">
      <div className="givestuff__hero">
        <div className="givestuff__hero-img">
          <Container className="givestuff">
            <div className="givestuff__hero-content">
              <HeaderUser />
              <div className="givestuff__hero-start">
                <h2 className="givestuff__hero-title">
                  Oddaj rzeczy, kórych już nie chcesz
                </h2>
                <h1 className="givestuff__hero-title main">potrzebującym</h1>
                <Decoration className="givestuff__hero-decoration" />
                <h3 className="givestuff__hero-subtitle">
                  Wystarczą 4 proste kroki:
                </h3>
                <GiveStuffSteps />
              </div>
            </div>
          </Container>
        </div>
      </div>
      <GiveStuffForm />
      <Contact />
    </section>
  );
};

export default GiveStuff;
