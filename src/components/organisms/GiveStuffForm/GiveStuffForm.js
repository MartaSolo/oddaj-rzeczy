import { useState } from "react";
import Container from "../../atoms/Container";
import TypeInputs from "../../molecules/TypeInputs";
import BagsSelect from "../../molecules/BagsSelect";
import LocationSelect from "../../molecules/LocationSelect";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  // console.log("stuff", stuff);
  const [bags, setBags] = useState("");
  // console.log("bags", bags);
  const [location, setLocation] = useState("");
  console.log("location", location);

  // const [stuff, setStuff] = useState({
  //   clothesReusable: false,
  //   clothesUnreusable: false,
  //   toys: false,
  //   books: false,
  //   others: false,
  // });
  // const [form, setForm] = useState({
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
            <div className="givestuff__form-inputs">
              <TypeInputs setType={setType} />
              <BagsSelect bags={bags} setBags={setBags} />
              <LocationSelect location={location} setLocation={setLocation} />

              <GiveStuffButtons step={step} setStep={setStep} />
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
