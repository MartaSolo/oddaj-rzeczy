import BgImage from "../../atoms/BgImage";
import Decoration from "../../atoms/Decoration";
import ContactForm from "../../molecules/ContactForm";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__content">
        <div className="contact__content-text">
          <h2 className="contact__content-title">Skontaktuj się z nami</h2>
          <Decoration className="contact__text-decoration" />
          <ContactForm />
        </div>
        {/* <ContactForm /> */}
      </div>
    </section>
  );
};

export default Contact;
