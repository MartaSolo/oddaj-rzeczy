import AuthButton from "../../atoms/AuthButton";
import { useUserAuth } from "../../../context/UserAuthContext";
import "./StartButtons.scss";

const StartButtons = () => {
  const { user } = useUserAuth();
  return (
    <div className="start__links">
      <AuthButton
        to={user ? "/oddaj-rzeczy" : "/login"}
        className="start__links-login"
        text={`Oddaj\nrzeczy`}
      />
      <AuthButton
        to={user ? "/oddaj-rzeczy" : "/login"}
        className="start__links-login"
        text={`Zorganizuj\nzbiórkę`}
      />
    </div>
  );
};

export default StartButtons;
