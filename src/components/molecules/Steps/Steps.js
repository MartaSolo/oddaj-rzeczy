import Container from "../../atoms/Container";
import Step from "../../atoms/Step";
import "./Steps.scss";

const Steps = () => {
  return (
    <div className="steps__steps">
      <Container>
        <Step
          title={`Wybierz rzeczy`}
          description={`ubrania, zabawki,\nsprzęt i inne`}
        />
        <Step
          title={`Spakuj je`}
          description={`skorzystaj z\nworków na śmieci`}
        />

        <Step
          title={`Zdecyduj komu\nchcesz pomóc`}
          description={`wybierz zaufane\nmiejsce`}
        />
        <Step
          title={`Zamów kuriera`}
          description={`kurier przyjedzie\nw dogodnym terminie`}
        />
      </Container>
    </div>
  );
};

export default Steps;
