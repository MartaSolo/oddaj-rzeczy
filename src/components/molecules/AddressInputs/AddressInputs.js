import { useState } from "react";
import regexStreet from "../../../utils/regexStreet";
import regexPostCode from "../../../utils/regexPostCode";
import regexPhone from "../../../utils/regexPhone";
import "./AddressInputs.scss";

const AddressInputs = ({
  street,
  setStreet,
  city,
  setCity,
  postCode,
  setPostCode,
  phone,
  setPhone,
}) => {
  const [adressInputsErrors, setAddressInputsErrors] = useState({
    street: "",
    city: "",
    postCode: "",
    phone: "",
  });

  const handleStreetChange = (e) => {
    setStreet(e.target.value);
    if (e.target.value !== "") {
      setAddressInputsErrors((prev) => ({ ...prev, street: "" }));
    }
  };

  const handleStreetBlur = () => {
    if (!regexStreet.test(street)) {
      setAddressInputsErrors((prev) => ({
        ...prev,
        street: "Podana nazwa jest za krótka!",
      }));
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (e.target.value !== "") {
      setAddressInputsErrors((prev) => ({ ...prev, city: "" }));
    }
  };

  const handleCityBlur = () => {
    if (city.length < 2) {
      setAddressInputsErrors((prev) => ({
        ...prev,
        city: "Podana nazwa jest za krótka!",
      }));
    }
  };

  const handlePostCodeChange = (e) => {
    setPostCode(e.target.value);
    if (e.target.value !== "") {
      setAddressInputsErrors((prev) => ({ ...prev, postCode: "" }));
    }
  };

  const handlePostCodeBlur = () => {
    if (!regexPostCode.test(postCode)) {
      setAddressInputsErrors((prev) => ({
        ...prev,
        postCode: "Podany kod jest niewłaściwy!",
      }));
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (e.target.value !== "") {
      setAddressInputsErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneBlur = () => {
    if (!regexPhone.test(phone)) {
      setAddressInputsErrors((prev) => ({
        ...prev,
        phone: "Podany numer jest niewłaściwy!",
      }));
    }
  };

  return (
    <div className="address__inputs">
      <h4 className="address__inputs-title">Adres odbioru:</h4>

      <div className="address__inputs-ipnut">
        <label className="address__input-label" htmlFor="street">
          Ulica
        </label>
        <input
          className={
            adressInputsErrors.street
              ? "address__input-input error"
              : "address__input-input"
          }
          type="text"
          id="street"
          name="street"
          value={street}
          onChange={handleStreetChange}
          onBlur={handleStreetBlur}
        ></input>
        {adressInputsErrors.street && (
          <span className="address__input-error">
            {adressInputsErrors.street}
          </span>
        )}
      </div>

      <div className="address__inputs-ipnut">
        <label className="address__input-label" htmlFor="city">
          Miasto
        </label>
        <input
          className={
            adressInputsErrors.city
              ? "address__input-input error"
              : "address__input-input"
          }
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={handleCityChange}
          onBlur={handleCityBlur}
        ></input>
        {adressInputsErrors.city && (
          <span className="address__input-error">
            {adressInputsErrors.city}
          </span>
        )}
      </div>

      <div className="address__inputs-ipnut">
        <label className="address__input-label" htmlFor="postCode">
          {`Kod\npocztowy`}
        </label>
        <input
          className={
            adressInputsErrors.postCode
              ? "address__input-input error"
              : "address__input-input"
          }
          type="text"
          id="postCode"
          name="postCode"
          value={postCode}
          onChange={handlePostCodeChange}
          onBlur={handlePostCodeBlur}
        ></input>
        {adressInputsErrors.postCode && (
          <span className="address__input-error">
            {adressInputsErrors.postCode}
          </span>
        )}
      </div>

      <div className="address__inputs-ipnut">
        <label className="address__input-label" htmlFor="phone">
          {`Numer\ntelefonu`}
        </label>
        <input
          className={
            adressInputsErrors.phone
              ? "address__input-input error"
              : "address__input-input"
          }
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={handlePhoneBlur}
        ></input>
        {adressInputsErrors.phone && (
          <span className="adress__input-error">
            {adressInputsErrors.phone}
          </span>
        )}
      </div>
    </div>
  );
};

export default AddressInputs;
