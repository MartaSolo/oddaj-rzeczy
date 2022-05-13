import { useState } from "react";
import regexEmail from "../../../utils/regexEmail";
import postFormData from "../../../api";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value.length !== "") {
      setFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleNameBlur = () => {
    if (form.name.trim() === "" || form.name.includes(" ")) {
      setFormError((prev) => ({
        ...prev,
        name: "Podane imię jest nieprawidłowe!",
      }));
    }
  };

  const handleEmailBlur = () => {
    if (form.email.trim() === "" || !regexEmail.test(form.email)) {
      setFormError((prev) => ({
        ...prev,
        email: "Podany email jest nieprawidłowy!",
      }));
    }
  };

  const handleMessageBlur = () => {
    if (form.message.length < 120) {
      setFormError((prev) => ({
        ...prev,
        message: "Wiadomość musi mieć co najmniej 120 znaków!",
      }));
    }
  };

  const isFormValid = () => {
    if (
      !formError.name &&
      !formError.email &&
      !formError.message &&
      form.name &&
      form.email &&
      form.message
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    postFormData(form);
    setForm({ name: "", email: "", message: "" });
    setFormSuccess("Wiadomość została wysłana!\nWkrótce się skontaktujemy.");
  };

  return (
    <form
      className={
        formSuccess ? "contact__content-form success" : "contact__content-form"
      }
      onSubmit={handleSubmit}
    >
      {formSuccess && (
        <div className="contact__form-success">{formSuccess}</div>
      )}
      <div className="contact__form-inputs">
        <div className="contact__form-input">
          <label className="contact__input-label" htmlFor="name">
            Wpisz swoje imię:
          </label>
          <input
            className={
              formError.name
                ? "contact__input-input error"
                : "contact__input-input"
            }
            type="text"
            id="name"
            name="name"
            placeholder="Marta"
            value={form.name}
            onChange={handleChange}
            onBlur={handleNameBlur}
          ></input>
          {formError.name && (
            <span className="input__error-name">{formError.name}</span>
          )}
        </div>
        <div className="contact__form-input">
          <label className="contact__input-label" htmlFor="email">
            Wpisz swój mail:
          </label>
          <input
            className={
              formError.email
                ? "contact__input-input error"
                : "contact__input-input"
            }
            type="email"
            id="email"
            name="email"
            placeholder="abcd@xyz.pl"
            value={form.email}
            onChange={handleChange}
            onBlur={handleEmailBlur}
          ></input>
          {formError.email && (
            <span className="input__error-email">{formError.email}</span>
          )}
        </div>
      </div>

      <div className="contact__form-textarea">
        <label className="contact__textarea-label" htmlFor="message">
          Wpisz swoją wiadomość:
        </label>
        <textarea
          className={
            formError.message
              ? "contact__textarea-textarea error"
              : "contact__textarea-textarea"
          }
          id="message"
          name="message"
          rows={4}
          placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae tempora minima aut magnam id corporis nostrum blanditiis. Totam, illo? Maxime at ducimus eius incidunt ex? Minima quasi quo suscipit ipsum aperiam."
          value={form.message}
          onChange={handleChange}
          onBlur={handleMessageBlur}
        ></textarea>
        {formError.message && (
          <span className="input__error-message">{formError.message}</span>
        )}
      </div>

      <button
        className="contact__form-button"
        type="submit"
        disabled={!isFormValid()}
      >
        Wyślij
      </button>
    </form>
  );
};

export default ContactForm;
