import React from "react";
import AuthButton from "../../atoms/AuthButton";

const StartButtons = () => {
  return (
    <div className="start__links">
      <AuthButton
        to="/login"
        className="start__links-login"
        text={`Oddaj <br /> rzeczy`}
      />
      <AuthButton
        to="/login"
        className="start__links-login"
        text={`Zorganizuj <br /> zbiórkę`}
      />
    </div>
  );
};

export default StartButtons;
