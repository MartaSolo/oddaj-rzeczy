import { useState } from "react";
import Container from "../../atoms/Container";
import StuffInputs from "../../molecules/StuffInputs";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    stuff: [],
    bags: "",
    location: "",
    target: "",
    street: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    date: "",
    hour: "",
    shipment: "",
  });
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
            <StuffInputs stuff={form.stuff} />
            <GiveStuffButtons step={step} setStep={setStep} />
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
