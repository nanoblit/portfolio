import React from "react";
import styled from "styled-components";

import Bar from "./components/Bar";
import MainImage from "./components/MainImage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GlobalStyles from "./styles/GlobalStyles";

const AppDiv = styled.div``;

const App = (): JSX.Element => {
  return (
    <AppDiv>
      <GlobalStyles />
      <Bar />
      <MainImage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </AppDiv>
  );
};

export default App;
