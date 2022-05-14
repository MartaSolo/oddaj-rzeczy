import "./SummaryFormTime.scss";

const SummaryFormTime = ({ date, time, note }) => {
  return (
    <div className="summary__time">
      <h5 className="summary__time-subtitle">Termin odbioru:</h5>
      <div className="summary__time-content">
        <div className="summary__details">
          <p className="summary__details-name">Data</p>
          <p className="summary__details-value">{date}</p>
        </div>
        <div className="summary__details">
          <p className="summary__details-name">Godzina</p>
          <p className="summary__details-value">{time}</p>
        </div>
        <div className="summary__details">
          <p className="summary__details-name">{`Uwagi\ndla kiriera`}</p>
          <p className="summary__details-value">{note}</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryFormTime;
