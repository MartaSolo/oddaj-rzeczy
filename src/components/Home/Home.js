import React from "react";
import { Header } from "../Header/Header";
import { Start } from "../Start/Start";
import { Steps } from "../Steps/Steps";
import { About } from "../About/About";
import { Organizations } from "../Organizations/Organizations";
import { Contact } from "../Contact/Contact";
import { Footer } from "../Footer/Footer";

export const Home = () => {
  return (
    <>
      <div>Home component content</div>
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
