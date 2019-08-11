import React from "react";
import styled from "styled-components";

import image from "../images/background.jpg";

const MainImageDiv = styled.div`
  position: relative;
  background-image: url(${image});
  background-size: cover;
  padding-top: 51.32%;

  .summary {
    position: absolute;
    max-width: 50rem;
    top: 6rem;
    left: 6rem;
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
      <p>An awesome image with some text and my face</p>
    </MainImageDiv>
  );
};

export default MainImage;
