import "./GiveStuffSummaryGiven.scss";

const GiveStuffSummaryGiven = ({ bags, type, helpGroup }) => {
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
    }
  };

  const checkedHelpGroup = (object) => {
    let result = [];
    Object.entries(object).map((entry) => {
      if (entry[1]) {
        const entryEdited = () => {
          switch (entry[0]) {
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
          }
        };
        result.push(entryEdited());
      }
    });
    return result.join(", ");
  };
  return (
    <div className="summary__form-give">
      <h5 className="summary__give-subtitle">Oddajesz</h5>
      <div className="summary__give-content">
        {bagsNumber === 1 && (
          <p className="summary__give-bags">{bags} worek, </p>
        )}
        {bagsNumber !== 1 && bagsNumber !== 5 && (
          <p className="summary__give-bags">{bags} worki, </p>
        )}
        {bagsNumber === 5 && (
          <p className="summary__give-bags">{bags} worków, </p>
        )}
        <p className="summary__give-type">{typeDescription()}, </p>
        <p className="summary__give-helpgroup">{checkedHelpGroup(helpGroup)}</p>
      </div>
    </div>
  );
};

export default GiveStuffSummaryGiven;
