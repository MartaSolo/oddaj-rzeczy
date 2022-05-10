import "./GiveStuffStep.scss";

const GiveStuffStep = ({ step, text }) => {
  return (
    <div className="givestuff__steps-step">
      <p className="givestuff__steps-number">{step}</p>
      <p className="givestuff__steps-text">{text}</p>
    </div>
  );
};

export default GiveStuffStep;
