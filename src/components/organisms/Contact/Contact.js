import Decoration from "../../atoms/Decoration";
import ContactForm from "../../molecules/ContactForm";
import Footer from "../../molecules/Footer";
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
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
