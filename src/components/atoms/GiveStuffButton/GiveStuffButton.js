import React from "react";

const GiveStuffButton = ({ className, text, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default GiveStuffButton;
