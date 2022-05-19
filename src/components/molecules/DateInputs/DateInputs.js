import "./DateInputs.scss";

const DateInputs = ({ date, setDate, time, setTime, note, setNote }) => {
  return (
    <div className="date__inputs">
      <h4 className="date__inputs-title">Termin odbioru:</h4>
      <div className="date__inputs-ipnut">
        <label className="date_input-label" htmlFor="date">
          Data
        </label>
        <input
          className="date_input-input"
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="date__inputs-ipnut">
        <label className="date_input-label" htmlFor="time">
          Time
        </label>
        <input
          className="date_input-input"
          type="time"
          id="time"
          name="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        ></input>
      </div>
      <div className="date__inputs-ipnut">
        <label className="date_input-label" htmlFor="note">
          Uwagi dla kuriera
        </label>
        <textarea
          className="date_input-textarea"
          id="note"
          name="note"
          rows={4}
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default DateInputs;
