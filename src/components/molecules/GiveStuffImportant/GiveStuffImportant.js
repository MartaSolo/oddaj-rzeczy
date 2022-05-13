import { useState } from "react";
import Container from "../../atoms/Container";
import "./GiveStuffImportant.scss";

const GiveStuffImportant = ({ step }) => {
  const [statement] = useState({
    first:
      "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.",
    second:
      "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ.",
    third:
      "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.",
    fourth: "Podaj adres oraz termin odbioru rzeczy.",
  });

  if (step < 5) {
    return (
      <div className="givestuff__form-important">
        <Container>
          <h3 className="form__important-title">Ważne!</h3>
          <p className="form__important-description">
            {step === 1 && statement.first}
            {step === 2 && statement.second}
            {step === 3 && statement.third}
            {step === 4 && statement.fourth}
          </p>
        </Container>
      </div>
    );
  } else {
    return null;
  }
};

export default GiveStuffImportant;
