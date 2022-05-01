import "./Step.scss";

const Step = ({ title, description }) => {
  return (
    <div className="steps__step">
      <div className="setps__step-decoration"></div>
      <h5 className="steps__step-title">{title}</h5>
      <p className="steps__step-decsription">{description}</p>
    </div>
  );
};

export default Step;
