import "./GiveStuffSummaryGiven.scss";

const GiveStuffSummaryGiven = ({ bags, type, helpGroup, localization }) => {
  const bagsNumber = Number(bags);

  const typeDescription = () => {
    switch (type) {
      case "clothesReusable":
        return "ubrania w dobrym stanie";
      case "clothesUnreusable":
        return "ubrania do wyrzucenia";
      case "toys":
        return "zabawki";
      case "books":
        return "ksiązki";
      case "others":
        return "inne";
      default:
        return "";
    }
  };

  const checkedHelpGroup = (object) => {
    let checked = Object.entries(object).filter((arr) => arr[1] === true);

    let result = checked.map((el) => {
      switch (el[0]) {
        case "children":
          return "dzieciom";
        case "singleMothers":
          return "samotnym matkom";
        case "homelsess":
          return "bezdomnym";
        case "disabled":
          return "niepełnosprawnym";
        case "elderly":
          return "osobom starszym";
        default:
          return "";
      }
    });
    return result.join(", ");
  };

  return (
    <div className="summary__form-give">
      <h5 className="summary__give-subtitle">Oddajesz: </h5>
      <div className="summary__give-content">
        <div className="summary__give-stuff">
          {bagsNumber === 1 && (
            <p className="summary__give-details">
              {`${bags} worek,\n${typeDescription()},\n${checkedHelpGroup(
                helpGroup
              )}`}
            </p>
          )}
          {bagsNumber !== 1 && bagsNumber !== 5 && (
            <p className="summary__give-details">
              {`${bags} worki,\n${typeDescription()},\n${checkedHelpGroup(
                helpGroup
              )}`}
            </p>
          )}
          {bagsNumber === 5 && (
            <p className="summary__give-details">
              {`${bags} worków,\n${typeDescription()},\n${checkedHelpGroup(
                helpGroup
              )}`}
            </p>
          )}
        </div>
        <div className="summary__give-where">
          <p className="summary__give-localization">
            dla lokalizacji: {localization}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GiveStuffSummaryGiven;
