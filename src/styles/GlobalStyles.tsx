import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import { black, white } from "./variables";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:300&display=swap");
  ${reset};

  h1, h2, h3, p, a, span {
    font-family: "Lato", Helvetica, sans-serif;
    color: ${white};
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  h3 {
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p, a {
    font-size: 2rem;
    line-height: 1.3;
  }

  span {
    font-size: 1.8rem;
  }

  body {
    background-color: ${black};
  }
`;

export default GlobalStyles;
