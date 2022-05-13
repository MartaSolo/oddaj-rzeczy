import { useState } from "react";
import Container from "../../atoms/Container";
import GiveStuffImportant from "../../molecules/GiveStuffImportant";
import TypeInputs from "../../molecules/TypeInputs";
import BagsSelect from "../../molecules/BagsSelect";
import LocalizationSelect from "../../molecules/LocalizationSelect";
import HelpGroupCheckboxes from "../../molecules/HelpGroupCheckboxes";
import LocalizationSpecificInput from "../../molecules/LocalizationSpecificInput";
import GiveStuffButtons from "../../molecules/GiveStuffButtons";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  const [step, setStep] = useState(1);
  // console.log("step", step);
  const [type, setType] = useState("");
  // console.log("stuff", stuff);
  const [bags, setBags] = useState("");
  // console.log("bags", bags);
  const [localization, setLocalization] = useState("");
  // console.log("localization", localization);
  const [helpGroup, setHelpGroup] = useState({
    children: true,
    singleMothers: false,
    homelsess: false,
    disabled: false,
    elderly: false,
  });
  // console.log("helpGroup", helpGroup);
  const [localizationSpecific, setLocalizationSpecific] = useState("");
  // console.log("localizationSpecific", localizationSpecific);

  return (
    <section className="givestuff__form">
      <GiveStuffImportant step={step} />

      <div className="givestuff__form-content">
        <Container>
          <form className="givestuff__form-form">
            <p className="givestuff__form-step">Krok {step}/4</p>
            <div className="givestuff__form-inputs">
              <TypeInputs setType={setType} />
              <BagsSelect bags={bags} setBags={setBags} />
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

              <GiveStuffButtons step={step} setStep={setStep} />
            </div>
          </form>
        </Container>
      </div>
    </section>
  );
};

export default GiveStuffForm;
