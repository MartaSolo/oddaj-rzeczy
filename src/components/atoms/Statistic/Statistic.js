import "./Statistic.scss";

const Statistic = ({ number, title, description }) => {
  return (
    <div className="start__statistic">
      <h3 className="start__statistic-number">{number}</h3>
      <h4 className="start__statistic-title">{title}</h4>
      <p className="start__statistic-description">{description}</p>
    </div>
  );
};

export default Statistic;
