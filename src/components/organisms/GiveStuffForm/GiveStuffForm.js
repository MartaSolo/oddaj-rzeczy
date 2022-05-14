import { useState } from "react";
import Container from "../../atoms/Container";
import GiveStuffImportant from "../../molecules/GiveStuffImportant";
import TypeInputs from "../../molecules/TypeInputs";
import BagsSelect from "../../molecules/BagsSelect";
import LocalizationSelect from "../../molecules/LocalizationSelect";
import HelpGroupCheckboxes from "../../molecules/HelpGroupCheckboxes";
import LocalizationSpecificInput from "../../molecules/LocalizationSpecificInput";
import AddressInputs from "../../molecules/AddressInputs";
import DateInputs from "../../molecules/DateInputs";
import GiveStuffSummary from "../../molecules/GiveStuffSummary";
import GiveStuffThanks from "../../molecules/GiveStuffThanks";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  // console.log("step", step);
  const [type, setType] = useState("");
  console.log("type", type);
  const [bags, setBags] = useState("");
  console.log("bags", bags);
  const [localization, setLocalization] = useState("");
  console.log("localization", localization);
  const [helpGroup, setHelpGroup] = useState({
    children: true,
    singleMothers: false,
    homelsess: false,
    disabled: false,
    elderly: false,
  });
  console.log("helpGroup", helpGroup);
  const [localizationSpecific, setLocalizationSpecific] = useState("");
  console.log("localizationSpecific", localizationSpecific);
  const [street, setStreet] = useState("");
  console.log("street", street);
  const [city, setCity] = useState("");
  console.log("city", city);
  const [postCode, setPostCode] = useState("");
  console.log("postCode", postCode);
  const [phone, setPhone] = useState("");
  console.log("phone", phone);
  const [date, setDate] = useState("");
  console.log("date", date);
  const [time, setTime] = useState("");
  console.log("time", time);
  const [note, setNote] = useState("");
  console.log("note", note);

  return (
    <section className="givestuff__form">
      <GiveStuffImportant step={step} />

      <div className="givestuff__form-content">
        <Container>
          <form className="givestuff__form-form">
            {step <= 4 && <p className="givestuff__form-step">Krok {step}/4</p>}

            <div className="givestuff__form-inputs">
              {step === 1 && <TypeInputs setType={setType} />}

              {step === 2 && <BagsSelect bags={bags} setBags={setBags} />}

              {step === 3 && (
                <>
                  <LocalizationSelect
                    localization={localization}
                    setLocalization={setLocalization}
                  />
                  <HelpGroupCheckboxes
                    helpGroup={helpGroup}
                    setHelpGroup={setHelpGroup}
                  />
                  <LocalizationSpecificInput
                    localizationSpecific={localizationSpecific}
                    setLocalizationSpecific={setLocalizationSpecific}
                  />
                </>
              )}

              {step === 4 && (
                <div className="adresstime__inputs">
                  <h3>Podaj adres oraz termin odbioru przez kuriera</h3>
                  <AddressInputs
                    street={street}
                    setStreet={setStreet}
                    city={city}
                    setCity={setCity}
                    postCode={postCode}
                    setPostCode={setPostCode}
                    phone={phone}
                    setPhone={setPhone}
                  />
                  <DateInputs
                    date={date}
                    setDate={setDate}
                    time={time}
                    setTime={setTime}
                    note={note}
                    setNote={setNote}
                  />
                </div>
              )}

              {step === 5 && (
                <GiveStuffSummary
                  type={type}
                  bags={bags}
                  helpGroup={helpGroup}
                  street={street}
                  city={city}
                  postCode={postCode}
                  phone={phone}
                  date={date}
                  time={time}
                  note={note}
                />
              )}

              {step === 6 && <GiveStuffThanks />}

              <GiveStuffButtons step={step} setStep={setStep} />
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
