import Checkbox from "../../atoms/Checkbox";
import "./StuffInputs.scss";

const StuffInputs = ({ stuff }) => {
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name, e.target.checked);
  };
  return (
    <div className="stuff__inputs">
      <h3 className="stuff__inputs-title">Zaznacz co chcesz oddać:</h3>
      <Checkbox
        divClassName="stuff__input"
        inuptClassName="stuff__input-checkbox"
        inputName="clothes reusable"
        inputId="clothes reusable"
        inputValue="clothes reusable"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelhtmlFor="clothes reusable"
        labeltext="ubrania, które nadają się do ponownego użycia"
      />
      <Checkbox
        divClassName="stuff__input"
        inuptClassName="stuff__input-checkbox"
        inputName="clothes unreusable"
        inputId="clothes unreusable"
        inputValue="clothes unreusable"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelhtmlFor="clothes unreusable"
        labeltext="ubrania, do wyrzucenia"
      />
      <Checkbox
        divClassName="stuff__input"
        inuptClassName="stuff__input-checkbox"
        inputName="toys"
        inputId="toys"
        inputValue="toys"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelhtmlFor="toys"
        labeltext="zabawki"
      />
      <Checkbox
        divClassName="stuff__input"
        inuptClassName="stuff__input-checkbox"
        inputName="books"
        inputId="books"
        inputValue="books"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelhtmlFor="books"
        labeltext="książki"
      />
      <Checkbox
        divClassName="stuff__input"
        inuptClassName="stuff__input-checkbox"
        inputName="others"
        inputId="others"
        inputValue="others"
        onChange={handleChange}
        labelClassName="stuff__input-label"
        labelhtmlFor="others"
        labeltext="inne"
      />
    </div>
  );
};

export default StuffInputs;

// const StuffInputs = ({ form }) => {
//   return (
//     <div className="stuff__inputs">
//       <h3 className="stuff__inputs-title">Zaznacz co chcesz oddać</h3>
//       <div className="stuff__input">
//         <input
//           className="stuff__input-checkbox"
//           type="checkbox"
//           name="clothes reusable"
//           id="clothes reusable"
//           value="clothes reusable"
//           onChange={handleChange}
//         ></input>
//         <label className="stuff__input-label" htmlFor="clothes reusable">
//           ubrania, które nadają się do ponownego użycia
//         </label>
//       </div>
//     </div>
//   );
// };

// export default StuffInputs;
