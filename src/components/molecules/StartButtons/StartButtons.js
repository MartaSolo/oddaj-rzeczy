import AuthButton from "../../atoms/AuthButton";
import "./StartButtons.scss";

const StartButtons = () => {
  return (
    <div className="start__links">
      <AuthButton
        to="/login"
        className="start__links-login"
        text={`Oddaj\nrzeczy`}
      />
      <AuthButton
        to="/login"
        className="start__links-login"
        text={`Zorganizuj\nzbiórkę`}
      />
    </div>
  );
};

export default StartButtons;
