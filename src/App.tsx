import React from "react";
import styled from "styled-components";

import Bar from "./components/Bar";
import MainImage from "./components/MainImage";
import GlobalStyles from "./styles/GlobalStyles";


const AppDiv = styled.div`
`;

const App = (): JSX.Element => {
  return (
    <AppDiv>
      <GlobalStyles />
      <Bar />
      <MainImage />
    </AppDiv>
  );
};

export default App;
