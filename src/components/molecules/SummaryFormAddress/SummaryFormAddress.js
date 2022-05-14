import "./SummaryFormAddress.scss";

const SummaryFormAddress = ({ street, city, postCode, phone }) => {
  return (
    <div className="summary__address">
      <h5 className="summary__address-subtitle">Adres odbioru:</h5>
      <div className="summary__address-content">
        <div className="summary__details">
          <p className="summary__details-name">Ulica</p>
          <p className="summary__details-value">{street}</p>
        </div>
        <div className="summary__details">
          <p className="summary__details-name">Miasto</p>
          <p className="summary__details-value">{city}</p>
        </div>
        <div className="summary__details">
          <p className="summary__details-name">{`Kod\npocztowy`}</p>
          <p className="summary__details-value">{postCode}</p>
        </div>
        <div className="summary__details">
          <p className="summary__details-name">{`Numer\ntelefonu`}</p>
          <p className="summary__details-value">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryFormAddress;
