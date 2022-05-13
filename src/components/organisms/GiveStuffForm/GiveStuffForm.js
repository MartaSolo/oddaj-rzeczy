import { useState } from "react";
import Container from "../../atoms/Container";
import StuffInputs from "../../molecules/StuffInputs";
import BagsSelect from "../../molecules/BagsSelect";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  const [stuff, setStuff] = useState("");
  // console.log("stuff", stuff);
  const [bags, setBags] = useState("");
  console.log("bags", bags);

  // const [stuff, setStuff] = useState({
  //   clothesReusable: false,
  //   clothesUnreusable: false,
  //   toys: false,
  //   books: false,
  //   others: false,
  // });
  // const [form, setForm] = useState({
  //   bags: "",
  //   location: "",
  //   target: "",
  //   street: "",
  //   city: "",
  //   postalCode: "",
  //   phoneNumber: "",
  //   date: "",
  //   hour: "",
  //   shipment: "",
  // });
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
            <StuffInputs setStuff={setStuff} />
            <BagsSelect bags={bags} setBags={setBags} />
            <GiveStuffButtons step={step} setStep={setStep} />
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
