import Decoration from "../../atoms/Decoration";
import BgImage from "../../atoms/BgImage";
import StartButtons from "../../molecules/StartButtons";
import Statistics from "../../molecules/Statistics";
import "./Start.scss";

const Start = () => {
  return (
    <section id="start" className="start">
      <div className="start__hero">
        <div className="start__content">
          <div className="start__content-text">
            <h1 className="start__content-title">Zacznij pomagać!</h1>
            <h2 className="start__content-subtitle">
              Oddaj niechciane rzeczy w zaufane ręce
            </h2>
            <Decoration className="start__text-decoration" />
          </div>
          <StartButtons />
        </div>

        <BgImage
          divClassName="start__content-image"
          scr={require("../../../assets/home-hero-image.jpg")}
          alt="box with stuff"
          imgClassName="start__image-img"
        />
      </div>
      <Statistics />
    </section>
  );
};

export default Start;

// import BgImage from "../../atoms/BgImage";
// import StartButtons from "../../molecules/StartButtons";
// import Statistics from "../../molecules/Statistics";
// import "./Start.scss";

// const Start = () => {
//   return (
//     <section id="start" className="start">
//       <div className="start__hero">
//         <div className="start__content">
//           <div className="start__content-text">
//             <h1 className="start__content-title">Zacznij pomagać!</h1>
//             <h2 className="start__content-subtitle">
//               Oddaj niechciane rzeczy w zaufane ręce
//             </h2>
//             <div className="start__text-decoration"></div>
//           </div>
//           <StartButtons />
//         </div>

//         <BgImage
//           divClassName="start__content-image"
//           scr={require("../../../assets/home-hero-image.jpg")}
//           alt="box with stuff"
//           imgClassName="start__image-img"
//         />
//       </div>
//       <Statistics />
//     </section>
//   );
// };

// export default Start;
