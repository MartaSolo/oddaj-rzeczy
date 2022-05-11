import { useState } from "react";
import regexEmail from "../../../utils/regexEmail";
import postFormData from "../../../api";
import "./ContactForm.scss";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  console.log("form", form);

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log("formError", formError);

  // const [formTouched, setFormTouched] = useState({
  //   name: false,
  //   email: false,
  //   message: false,
  // });
  // console.log("formTouched", formTouched);

  const [formSuccess, setFormSuccess] = useState("");

  const handleNameChange = (e) => {
    setForm((prev) => ({ ...prev, name: e.target.value }));

    if (e.target.value.length !== "" || !form.name.includes(" ")) {
      setFormError((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleNameBlur = () => {
    // setFormTouched((prev) => ({ ...prev, name: true }));
    if (form.name.trim() === "" || form.name.includes(" ")) {
      setFormError((prev) => ({
        ...prev,
        name: "Podane imię jest nieprawidłowe!",
      }));
    }
  };

  const handleEmailChange = (e) => {
    setForm((prev) => ({ ...prev, email: e.target.value }));
    if (e.target.value.length !== "") {
      setFormError((prev) => ({ ...prev, email: "" }));
    }
  };

  const handleEmailBlur = () => {
    // setFormTouched((prev) => ({ ...prev, email: true }));
    if (form.email.trim() === "" || !regexEmail.test(form.email)) {
      setFormError((prev) => ({
        ...prev,
        email: "Podany email jest nieprawidłowy!",
      }));
    }
  };

  const handleMessageChange = (e) => {
    setForm((prev) => ({ ...prev, message: e.target.value }));
    if (e.target.value.length !== "") {
      setFormError((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleMessageBlur = () => {
    // setFormTouched((prev) => ({ ...prev, message: true }));
    if (form.message.length < 120) {
      setFormError((prev) => ({
        ...prev,
        message: "Wiadomość musi mieć conajmniej 120 znaków!",
      }));
    }
  };

  const isFormValid = () => {
    return formError.name || formError.email || formError.message
      ? false
      : true;
  };
  console.log("isFormValid", isFormValid());

  // -----------
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
            onChange={handleNameChange}
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
            onChange={handleEmailChange}
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
          onChange={handleMessageChange}
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

// import "./ContactForm.scss";

// const ContactForm = () => {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [formError, setFormError] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [formSuccess, setFormSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   const formValidation = () => {
//     let isValid = true;
//     if (form.name.length === 0 || form.name.includes(" ")) {
//       setFormError((prev) => {
//         return { ...prev, name: "Podane imię jest nieprawidłowe!" };
//       });
//       isValid = false;
//     }
//     if (form.email.length === 0 || !regexEmail.test(form.email)) {
//       setFormError((prev) => {
//         return { ...prev, email: "Podany email jest nieprawidłowy!" };
//       });
//       isValid = false;
//     }
//     if (form.message.length < 120) {
//       setFormError((prev) => {
//         return {
//           ...prev,
//           message: "Wiadomość musi mieć conajmniej 120 znaków!",
//         };
//       });
//       isValid = false;
//     }
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const isValid = formValidation();
//     if (isValid) {
//       postFormData(form);
//       setForm({ name: "", email: "", message: "" });
//       setFormError({ name: "", email: "", message: "" });
//       setFormSuccess("Wiadomość została wysłana!\nWkrótce się skontaktujemy.");
//     }
//   };

//   return (
//     <form
//       className={
//         formSuccess ? "contact__content-form success" : "contact__content-form"
//       }
//       onSubmit={handleSubmit}
//     >
//       {formSuccess && (
//         <div className="contact__form-success">{formSuccess}</div>
//       )}
//       <div className="contact__form-inputs">
//         <div className="contact__form-input">
//           <label className="contact__input-label" htmlFor="name">
//             Wpisz swoje imię:
//           </label>
//           <input
//             className={
//               formError.name
//                 ? "contact__input-input error"
//                 : "contact__input-input"
//             }
//             type="text"
//             id="name"
//             name="name"
//             placeholder="Marta"
//             value={form.name}
//             onChange={handleChange}
//           ></input>
//           {formError.name && (
//             <span className="input__error-name">{formError.name}</span>
//           )}
//         </div>
//         <div className="contact__form-input">
//           <label className="contact__input-label" htmlFor="email">
//             Wpisz swój mail:
//           </label>
//           <input
//             className={
//               formError.email
//                 ? "contact__input-input error"
//                 : "contact__input-input"
//             }
//             type="email"
//             id="email"
//             name="email"
//             placeholder="abcd@xyz.pl"
//             value={form.email}
//             onChange={handleChange}
//           ></input>
//           {formError.email && (
//             <span className="input__error-email">{formError.email}</span>
//           )}
//         </div>
//       </div>

//       <div className="contact__form-textarea">
//         <label className="contact__textarea-label" htmlFor="message">
//           Wpisz swoją wiadomość:
//         </label>
//         <textarea
//           className={
//             formError.message
//               ? "contact__textarea-textarea error"
//               : "contact__textarea-textarea"
//           }
//           id="message"
//           name="message"
//           rows={4}
//           placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae tempora minima aut magnam id corporis nostrum blanditiis. Totam, illo? Maxime at ducimus eius incidunt ex? Minima quasi quo suscipit ipsum aperiam."
//           value={form.message}
//           onChange={handleChange}
//         ></textarea>
//         {formError.message && (
//           <span className="input__error-message">{formError.message}</span>
//         )}
//       </div>

//       <button className="contact__form-button" type="submit">
//         Wyślij
//       </button>
//     </form>
//   );
// };

// export default ContactForm;
