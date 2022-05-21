import { useState } from "react";
import "./DateInputs.scss";

const DateInputs = ({ date, setDate, time, setTime, note, setNote }) => {
  console.log(date);
  const [dateInputsErrors, setDateInputsErrors] = useState({
    date: "",
  });

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (e.target.value !== "") {
      setDateInputsErrors((prev) => ({ ...prev, date: "" }));
    }
  };

  const handleDateBlur = () => {
    if ((date = "" || new Date(date) < new Date())) {
      setDateInputsErrors((prev) => ({
        ...prev,
        date: "Data jest niewłaściwa!",
      }));
    }
  };

  return (
    <div className="date__inputs">
      <h4 className="date__inputs-title">Termin odbioru:</h4>

      <div className="date__inputs-content">
        <div className="date__inputs-ipnut">
          <label className="date__input-label" htmlFor="date">
            Data
          </label>
          <div className="date__input">
            <input
              className={
                dateInputsErrors.date
                  ? "date__input-input error"
                  : "date__input-input"
              }
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
              onBlur={handleDateBlur}
            ></input>
            {dateInputsErrors.date && (
              <span className="date__input-error">{dateInputsErrors.date}</span>
            )}
          </div>
        </div>

        <div className="date__inputs-ipnut">
          <label className="date__input-label" htmlFor="time">
            Czas
          </label>
          <div className="date__input">
            <input
              className="date__input-input"
              type="time"
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="date__inputs-ipnut">
          <label className="date__input-label" htmlFor="note">
            {`Uwagi\ndla kuriera`}
          </label>
          <div className="date__input">
            <textarea
              className="date__input-textarea"
              id="note"
              name="note"
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateInputs;
