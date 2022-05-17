import Header from "../../organisms/Header";
import HeaderUser from "../../organisms/HeaderUser";
import Start from "../../organisms/Start";
import SimpleSteps from "../../organisms/SimpleSteps";
import About from "../../organisms/About";
import Organizations from "../../organisms/Organizations";
import Contact from "../../organisms/Contact";
import { useUserAuth } from "../../../context/UserAuthContext";

const Home = () => {
  const { user } = useUserAuth();
  return (
    <>
      {user ? <HeaderUser /> : <Header />}
      <Start />
      <SimpleSteps />
      <About />
      <Organizations />
      <Contact />
    </>
  );
};

export default Home;
