import { useState } from "react";
import Container from "../../atoms/Container";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  console.log("step", step);

  return (
    <section className="givestuff__form">
      <div className="givestuff__form-important">
        <Container>
          <h3 className="form__important-title">Ważne!</h3>
          <p className="form__important-description">Treść komunikatu</p>
        </Container>
      </div>

      <div className="givestuff__form-content">
        <Container>
          <form className="givestuff__form-form">
            <p className="givestuff__form-step">Krok {step}/4</p>
            <div>Inputy</div>
          </form>
          <GiveStuffButtons step={step} setStep={setStep} />
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
