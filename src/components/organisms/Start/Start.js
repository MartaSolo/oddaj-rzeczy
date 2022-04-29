import { NavLink } from "react-router-dom";
import "./Start.scss";

const Start = () => {
  return (
    <section id="start" className="start">
      <div className="start__content">
        <div className="start__text">
          <h1 className="start__text-title">Zacznij pomagać!</h1>
          <h2 className="start__text-subtitle">
            Oddaj niechciane rzeczy w zaufane ręce
          </h2>
          <div className="start__text-decoration"></div>
        </div>

        <div className="start__links">
          <NavLink to="/login" className="start__links-login">
            Oddaj
            <br />
            rzeczy
          </NavLink>
          <NavLink to="/login" className="start__links-login">
            Zorganizuj
            <br />
            zbiórkę
          </NavLink>
        </div>
      </div>
      <div className="start__image">
        <img
          src={require("../../../assets/home-hero-image.jpg")}
          alt="box with stuff"
          className="start__image-img"
        />
      </div>
    </section>
  );
};

export default Start;

// import { NavLink } from "react-router-dom";
// import "./Start.scss";

// const Start = () => {
//   return (
//     <section id="start" className="start">
//       <div className="start__content">
//         <div className="start__text">
//           <h1 className="start__text-title">Zacznij pomagać!</h1>
//           <h2 className="start__text-subtitle">
//             Oddaj niechciane rzeczy w zaufane ręce
//           </h2>
//           <div className="start__text-decoration"></div>
//         </div>

//         <div className="start__links">
//           <NavLink to="/login" className="start__links-login">
//             Oddaj
//             <br />
//             rzeczy
//           </NavLink>
//           <NavLink to="/login" className="start__links-login">
//             Zorganizuj
//             <br />
//             zbiórkę
//           </NavLink>
//         </div>
//       </div>
//       <div className="start__image" alt="box with used stuff"></div>
//     </section>
//   );
// };

// export default Start;
