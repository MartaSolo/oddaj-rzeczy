import { HashLink } from "react-router-hash-link";
import Decoration from "../../atoms/Decoration";
import Steps from "../../molecules/Steps";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./SimpleSteps.scss";

const SimpleSteps = () => {
  const { user } = useUserAuth();
  return (
    <section id="steps" className="steps">
      <h4 className="steps__title">Wystarczą 4 proste kroki</h4>
      <Decoration className="steps__decoration" />
      <div className="steps__container">
        <Steps />
      </div>
      <HashLink
        smooth
        to={user ? "/oddaj-rzeczy#top" : "/login"}
        className="steps__link"
      >{`Oddaj\nrzeczy`}</HashLink>
    </section>
  );
};

export default SimpleSteps;
