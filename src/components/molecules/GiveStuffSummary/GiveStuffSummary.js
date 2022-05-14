import GiveStuffSummaryGiven from "../GiveStuffSummaryGiven";
import GiveStuffSummaryAddress from "../GiveStuffSummaryAddress";
import GiveStuffSummaryTime from "../GiveStuffSummaryTime";
import "./GiveStuffSummary.scss";

const GiveStuffSummary = ({
  type,
  bags,
  helpGroup,
  street,
  city,
  postCode,
  phone,
  date,
  time,
  note,
}) => {
  return (
    <div className="summary__form">
      <h3 className="summary__form-title">Podsumowanie Twojej darowizny</h3>

      <GiveStuffSummaryGiven bags={bags} type={type} helpGroup={helpGroup} />

      <div className="summary__adresstime">
        <GiveStuffSummaryAddress
          street={street}
          city={city}
          postCode={postCode}
          phone={phone}
        />
        <GiveStuffSummaryTime date={date} time={time} note={note} />
      </div>
    </div>
  );
};

export default GiveStuffSummary;
