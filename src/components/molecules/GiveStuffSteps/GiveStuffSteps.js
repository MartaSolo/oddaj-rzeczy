import GiveStuffStep from "../../atoms/GiveStuffStep";
import "./GiveStuffSteps.scss";

const GiveStuffSteps = () => {
  return (
    <div className="givestuff__hero-steps">
      <GiveStuffStep
        className="givestuff__hero-step"
        step={1}
        text={`Wybierz\nrzeczy`}
      />
      <GiveStuffStep
        className="givestuff__hero-step"
        step={2}
        text={`Spakuj je\nw worki`}
      />
      <GiveStuffStep
        className="givestuff__hero-step"
        step={3}
        text={`Wybierz\nfundację`}
      />
      <GiveStuffStep
        className="givestuff__hero-step"
        step={4}
        text={`Zamów\nkuriera`}
      />
    </div>
  );
};

export default GiveStuffSteps;
