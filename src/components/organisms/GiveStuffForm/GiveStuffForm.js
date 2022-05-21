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
import { useUserAuth } from "../../../context/UserAuthContext";
import { db } from "../../../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import "./GiveStuffForm.scss";

// -------------------------------

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  const [type, setType] = useState("");
  const [bags, setBags] = useState("");
  const [localization, setLocalization] = useState("");
  const [helpGroup, setHelpGroup] = useState({
    children: false,
    singleMothers: false,
    homelsess: false,
    disabled: false,
    elderly: false,
  });
  const [localizationSpecific, setLocalizationSpecific] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const collectionRef = collection(db, "giveStuffForm");
  const { user } = useUserAuth();
  const userEmail = user.email;

  const handleSendGiveStuffForm = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        user: userEmail,
        created: serverTimestamp(),
        type: type,
        bags: bags,
        localization: localization,
        helpGroup: helpGroup,
        localizationSpecific: localizationSpecific,
        street: street,
        city: city,
        postCode: postCode,
        phone: phone,
        date: date,
        time: time,
        note: note,
      });
      // console.log("submit");
      setStep((prev) => prev + 1);
    } catch (error) {
      console.log("addDoc error", error);
    }
  };

  return (
    <section className="givestuff__form">
      <GiveStuffImportant step={step} />

      <div className="givestuff__form-content">
        <Container>
          <form
            className="givestuff__form-form"
            onSubmit={handleSendGiveStuffForm}
          >
            {step <= 4 && <p className="givestuff__form-step">Krok {step}/4</p>}

            <div className="givestuff__form-inputs">
              {step === 1 && <TypeInputs type={type} setType={setType} />}

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
                  <h3 className="adresstime__inputs-title">
                    Podaj adres oraz termin odbioru przez kuriera
                  </h3>
                  <div className="adresstime__inputs-inputs">
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
                </div>
              )}

              {step === 5 && (
                <GiveStuffSummary
                  type={type}
                  bags={bags}
                  helpGroup={helpGroup}
                  localization={localization}
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
            </div>
            <GiveStuffButtons
              step={step}
              setStep={setStep}
              type={type}
              bags={bags}
              helpGroup={helpGroup}
              localization={localization}
              street={street}
              city={city}
              postCode={postCode}
              phone={phone}
              date={date}
              time={time}
            />
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
