import React from "react";
import styled from "styled-components";
import { mainColor } from "../styles/variables";

import background from "../images/background.jpg";
import me from "../images/me.jpg";

const MainImageDiv = styled.div`
  position: relative;
  background-image: url(${background});
  background-size: cover;
  padding-top: 51.32%;

  .summary {
    position: absolute;
    max-width: 50rem;
    top: 6rem;
    left: 6rem;
  }

  .me {
    position: absolute;
    max-width: 50rem;
    top: 6rem;
    right: 6rem;

    img {
      width: 20rem;
      border: 2px solid ${mainColor};
      border-radius: 100%;
    }
  }
`;

const MainImage = (): JSX.Element => {
  return (
    <MainImageDiv>
      <div className="summary">
        <p>
          I am a full-stack web developer interested in modern web technologies
          who also enjoys gaming and gamedev.
        </p>
      </div>
      <div className="me">
        <img alt="My face" src={me} />
      </div>
      <p>An awesome image with some text and my face</p>
    </MainImageDiv>
  );
};

export default MainImage;
