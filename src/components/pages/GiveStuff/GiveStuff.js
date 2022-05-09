import Container from "../../atoms/Container";
import Decoration from "../../atoms/Decoration";
import HeaderUser from "../../organisms/HeaderUser";
import Contact from "../../organisms/Contact";
import "./GiveStuff.scss";

const GiveStuff = () => {
  return (
    <section className="givestuff">
      <div className="givestuff__hero">
        <div className="givestuff__hero-img">
          <Container>
            <div className="givestuff__hero-content">
              <HeaderUser />
              <div className="givestuff__hero-start">
                <h2 className="givestuff__hero-title">
                  Oddaj rzeczy, kórych już nie chcesz
                </h2>
                <h1 className="givestuff__hero-title main">potrzebującym</h1>
                <Decoration className="givestuff__hero-decoration" />
                <h3 className="givestuff__hero-subtitle">
                  Wystarczą 4 proste kroki:
                </h3>
                <div className="givestuff__hero-steps">Steps</div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <Contact />
    </section>
  );
};

export default GiveStuff;

// import Decoration from "../../atoms/Decoration";
// import HeaderUser from "../../organisms/HeaderUser";
// import Contact from "../../organisms/Contact";
// import "./GiveStuff.scss";

// const GiveStuff = () => {
//   return (
//     <section className="givestuff">
//       <div className="givestuff__hero">
//         <div className="givestuff__hero-img"></div>

//         <div className="givestuff__hero-content">
//           <HeaderUser />
//           <div className="givestuff__hero-start">
//             <h2 className="givestuff__hero-title">
//               Oddaj rzeczy, kórych już nie chcesz
//             </h2>
//             <h1 className="givestuff__hero-title main">potrzebującym</h1>
//             <Decoration className="givestuff__hero-decoration" />
//             <h3 className="givestuff__hero-subtitle">
//               Wystarczą 4 proste kroki:
//             </h3>
//             <div className="givestuff__hero-steps">Steps</div>
//           </div>
//         </div>
//       </div>

//       <Contact />
//     </section>
//   );
// };

// export default GiveStuff;
