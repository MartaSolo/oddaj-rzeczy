import "./GiveStuffButton.scss";
// import "./GiveStuffButton.scss";

const GiveStuffButton = ({ className, type, text, onClick, onSubmit }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {text}
    </button>
  );
};

export default GiveStuffButton;

// import "./GiveStuffButton.scss";

// const GiveStuffButton = ({ className, type, text, onClick }) => {
//   return (
//     <button className={className} type={type} onClick={onClick}>
//       {text}
//     </button>
//   );
// };

// export default GiveStuffButton;
