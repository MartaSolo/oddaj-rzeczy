import { useState } from "react";
import regexEmail from "../../../utils/regexEmail";
import postFormData from "../../../api";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // console.log("form", form);

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  // console.log("formError", formError);

  const [formTouched, setFormTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  // console.log("formTouched", formTouched);

  const [formSuccess, setFormSuccess] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (e.target.value.length !== "") {
      setFormError((prev) => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const handleBlur = (e) => {
    switch (e.target.name) {
      case "name":
        setFormTouched((prev) => ({ ...prev, name: true }));
        if (form.name.trim() === "" || form.name.includes(" ")) {
          setFormError((prev) => ({
            ...prev,
            name: "Podane imię jest nieprawidłowe!",
          }));
        }
        break;

      case "email":
        setFormTouched((prev) => ({ ...prev, email: true }));
        if (form.email.trim() === "" || !regexEmail.test(form.email)) {
          setFormError((prev) => ({
            ...prev,
            email: "Podany email jest nieprawidłowy!",
          }));
        }
        break;

      case "message":
        setFormTouched((prev) => ({ ...prev, message: true }));
        if (form.message.length < 120) {
          setFormError((prev) => ({
            ...prev,
            message: "Wiadomość musi mieć co najmniej 120 znaków!",
          }));
        }
        break;
      default:
        console.log("input not included in the fucntion");
    }
  };

  const isFormValid = () => {
    if (
      !formError.name &&
      !formError.email &&
      !formError.message &&
      formTouched.name === true &&
      formTouched.email === true &&
      formTouched.message === true &&
      form.name &&
      form.email &&
      form.message
    ) {
      return true;
    } else {
      return false;
    }
  };
  // console.log("isFormValid", isFormValid());

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid()) {
      return;
    }
    postFormData(form);
    setForm({ name: "", email: "", message: "" });
    setFormTouched({ name: false, email: false, message: false });
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
            onBlur={handleBlur}
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
            onBlur={handleBlur}
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
          onBlur={handleBlur}
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
