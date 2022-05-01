import Step from "../../atoms/Step";
import Container from "../../atoms/Container";
import "./Steps.scss";

const Steps = () => {
  return (
    <div className="steps__steps">
      <Container>
        <Step
          title={`Wybierz rzeczy`}
          description={`ubrania, zabawki,\nsprzęt i inne`}
        />
        <Step
          title={`Spakuj je`}
          description={`skorzystaj z\nworków na śmieci`}
        />

        <Step
          title={`Zdecyduj komu\nchcesz pomóc`}
          description={`wybierz zaufane\nmiejsce`}
        />
        <Step
          title={`Zamów kuriera`}
          description={`kurier przyjedzie\nw dogodnym terminie`}
        />
      </Container>
    </div>
  );
};

export default Steps;

// didn't work

// import Step from "../../atoms/Step";

// import { ReactComponent as Icon1 } from "../../../assets/icon-1.svg";
// import { ReactComponent as Icon2 } from "../../../assets/icon-2.svg";
// import { ReactComponent as Icon3 } from "../../../assets/icon-3.svg";
// import { ReactComponent as Icon4 } from "../../../assets/icon-4.svg";
// import "./Steps.scss";

// const Steps = () => {
//   return (
//     <div className="steps__steps">
//       <Step
//         children={<Icon1 />}
//         title="Wybierz rzeczy"
//         description="ubrania, zabawki, sprzęt i inne"
//       />
//       <Step
//         children={<Icon2 />}
//         title="Spakuj je"
//         description="skorzystaj z worków na śmieci"
//       />

//       <Step
//         children={<Icon3 />}
//         title="Zdecyduj komu chcesz pomóc"
//         description="wybierz zaufane miejsce"
//       />
//       <Step
//         children={<Icon4 />}
//         title="Zamów kuriera"
//         description="kurier przyjedzie w dogodnym terminie"
//       />
//     </div>
//   );
// };

// export default Steps;

//-----------didin't work
// import Step from "../../atoms/Step";
// import { ReactComponent as Icon1 } from "../../../assets/icon-1.svg";
// import IconX from "../../../assets/icon-1.svg";
// import "./Steps.scss";

// const Steps = () => {
//   return (
//     <div className="steps__steps">
//       {/* <Icon1 /> */}
//       <Step
//         // scr="../../../assets/icon-1.svg"
//         // scr={require("../../../assets/icon-1.svg")}
//         // scr={require("../../../assets/icon-1.svg").default}
//         // scr={require("../../../assets/home-hero-image.jpg")}
//         scr={IconX}
//         // scr=reqiure({IconX})
//         alt="koszulka"
//         title="Wybierz rzeczy"
//         description="ubrania, zabawki, sprzęt i inne"
//       />
//       <Step
//         scr={require("../../../assets/icon-2.svg")}
//         alt="torba"
//         title="Spakuj je"
//         description="skorzystaj z worków na śmieci"
//       />
//       <Step
//         scr={require("../../../assets/icon-3.svg")}
//         alt="lupa"
//         title="Zdecyduj komu chcesz pomóc"
//         description="wybierz zaufane miejsce"
//       />
//       <Step
//         scr={require("../../../assets/icon-3.svg")}
//         alt="strzałki"
//         title="Zamów kuriera"
//         description="kurier przyjedzie w dogodnym terminie"
//       />
//     </div>
//   );
// };

// export default Steps;
