import Container from "../../atoms/Container";
import "./GiveStuffForm.scss";

const GiveStuffForm = () => {
  return (
    <section className="givestuff__form">
      <div className="givestuff__form-important">
        <Container>
          <h3 className="form__important-title">Ważne!</h3>
          <p className="form__important-description">Treść komunikatu</p>
        </Container>
      </div>

      <div className="givestuff__form-form">
        <form>
          <div></div>
        </form>
      </div>
    </section>
  );
};

export default GiveStuffForm;
