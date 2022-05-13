import "./AddressInputs.scss";

const AddressInputs = ({
  stret,
  setStreet,
  city,
  setCity,
  postCode,
  setPostCode,
  phone,
  setPhone,
}) => {
  return (
    <div className="address__inputs">
      <h4 className="address__inputs-title">Adres odbioru:</h4>
      <div className="address__inputs-ipnut">
        <label className="address_input-label" htmlFor="street">
          Ulica
        </label>
        <input
          className="address_input-input"
          type="text"
          id="street"
          name="street"
          value={stret}
          onChange={(e) => setStreet(e.target.value)}
          //   onBlur={handleNameBlur}
        ></input>
      </div>
      <div className="address__inputs-ipnut">
        <label className="address_input-label" htmlFor="city">
          Miasto
        </label>
        <input
          className="address_input-input"
          type="text"
          id="city"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          //   onBlur={handleNameBlur}
        ></input>
      </div>
      <div className="address__inputs-ipnut">
        <label className="address_input-label" htmlFor="postCode">
          {`Kod\npocztowy`}
        </label>
        <input
          className="address_input-input"
          type="text"
          id="postCode"
          name="postCode"
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
          //   onBlur={handleNameBlur}
        ></input>
      </div>
      <div className="address__inputs-ipnut">
        <label className="address_input-label" htmlFor="phone">
          {`Numer\ntelefonu`}
        </label>
        <input
          className="address_input-input"
          type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          //   onBlur={handleNameBlur}
        ></input>
      </div>
    </div>
  );
};

export default AddressInputs;
