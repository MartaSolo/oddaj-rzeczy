import Decoration from "../../atoms/Decoration";
import BgImage from "../../atoms/BgImage";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about__content">
        <div className="about__content-text">
          <h2 className="about__content-title">O nas</h2>
          <Decoration className="about__text-decoration" />
          <p className="about__content-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem
            ab velit odio aliquid ullam facilis quasi consequuntur quae
            exercitationem? Amet aperiam dolorem reprehenderit consequatur?
          </p>
          <div className="about__content-signature"></div>
        </div>
      </div>
      <BgImage
        divClassName="about__content-image"
        imgClassName="about__image-img"
      />
    </section>
  );
};

export default About;
