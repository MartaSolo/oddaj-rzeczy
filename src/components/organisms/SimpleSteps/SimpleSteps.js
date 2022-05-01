import AuthButton from "../../atoms/AuthButton";
import Steps from "../../molecules/Steps";
import "./SimpleSteps.scss";

const SimpleSteps = () => {
  return (
    <section id="steps" className="steps">
      <h4 className="steps__title">Wystarczą 4 proste kroki</h4>
      <div className="steps__decoration"></div>
      <div className="steps__container">
        <Steps />
      </div>
      <AuthButton to="/login" className="steps__link" text={`Oddaj\nrzeczy`} />
    </section>
  );
};

export default SimpleSteps;