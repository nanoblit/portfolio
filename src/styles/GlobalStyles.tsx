import { createGlobalStyle } from "styled-components";

import reset from "./reset";
import { black, white } from "./variables";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Lato:300&display=swap");
  ${reset};

  h1, h2, p, a {
    font-family: "Lato", Helvetica, sans-serif;
    color: ${white};
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 3.0rem;
  }

  p, a {
    font-size: 2.0rem;
  }

  body {
    background-color: ${black};
  }
`;

export default GlobalStyles;
