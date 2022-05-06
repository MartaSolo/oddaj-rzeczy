import "./ContactForm.scss";

const ContactForm = () => {
  return (
    <form className="contact__content-form">
      <div className="contact__form-inputs">
        <div className="contact__form-input">
          <label className="contact__input-label" htmlFor="name">
            Wpisz swoje imię:
          </label>
          <input
            className="contact__input-input"
            type="text"
            id="name"
            name="name"
            placeholder="Marta"
          ></input>
        </div>
        <div className="contact__form-input">
          <label className="contact__input-label" htmlFor="email">
            Wpisz swój mail:
          </label>
          <input
            className="contact__input-input"
            type="email"
            id="email"
            name="email"
            placeholder="abcd@xyz.pl"
          ></input>
        </div>
      </div>

      <div className="contact__form-textarea">
        <label className="contact__textarea-label" htmlFor="message">
          Wpisz swoją wiadomość:
        </label>
        <textarea
          className="contact__textarea-textarea"
          id="message"
          name="message"
          rows={4}
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae tempora minima aut magnam id corporis nostrum blanditiis. Totam, illo? Maxime at ducimus eius incidunt ex?"
        ></textarea>
      </div>

      <button className="contact__form-button" type="submit">
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
