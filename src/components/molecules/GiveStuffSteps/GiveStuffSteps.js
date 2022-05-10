import GiveStuffStep from "../../atoms/GiveStuffStep";
import "./GiveStuffSteps.scss";

const GiveStuffSteps = () => {
  return (
    <div className="givestuff__hero-steps">
      <GiveStuffStep />
      <GiveStuffStep />
      <GiveStuffStep />
      <GiveStuffStep />
    </div>
  );
};

export default GiveStuffSteps;
