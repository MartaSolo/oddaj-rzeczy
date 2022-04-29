import Header from "../../organisms/Header";
import Start from "../../organisms/Start";
import Steps from "../../organisms/Steps";
import About from "../../organisms/About";
import Organizations from "../../organisms/Organizations";
import Contact from "../../organisms/Contact";
import Footer from "../../organisms/Footer";
// ----------
import NavLinks from "../../molecules/NavLinks";
import NavMobile from "../../molecules/NavMobile";
import NavDesktop from "../../molecules/NavDesktop";
import NavBar from "../../molecules/NavBar";

const Home = () => {
  return (
    <>
      {/* <NavMobile />
      <NavDesktop />
      <NavBar />
      <NavLinks /> */}
      <Header />
      <Start />
      <Steps />
      <About />
      <Organizations />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
