import SummaryFormGive from "../SummaryFormGive";
import SummaryFormAddress from "../SummaryFormAddress";
import SummaryFormTime from "../SummaryFormTime";
import "./SummaryForm.scss";

const SummaryForm = ({
  type,
  bags,
  helpGroup,
  localization,
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

      <SummaryFormGive bags={bags} type={type} helpGroup={helpGroup} />

      <div className="summary__adresstime">
        <SummaryFormAddress
          street={street}
          city={city}
          postCode={postCode}
          phone={phone}
        />
        <SummaryFormTime date={date} time={time} note={note} />
      </div>
    </div>
  );
};

export default SummaryForm;
