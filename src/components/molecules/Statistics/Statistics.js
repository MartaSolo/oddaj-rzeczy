import Statistic from "../../atoms/Statistic";
import Container from "../../atoms/Container";
import "./Statistics.scss";

const Statistics = () => {
  return (
    <div className="start__statistics">
      <Container>
        <Statistic
          number={10}
          title="Oddanych worków"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."
        />
        <Statistic
          number={5}
          title="Wspartych organizacji"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."
        />
        <Statistic
          number={7}
          title="Zorganizowanych zbiórek"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non blanditiis optio debitis nihil repellat."
        />
      </Container>
    </div>
  );
};

export default Statistics;
