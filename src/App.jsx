import { useState } from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Expertise from "./Components/Expertise";


function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Expertise/>
      <Footer />
    </>
  );
}

export default App;
