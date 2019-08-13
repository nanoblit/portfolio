import React from "react";
import styled from "styled-components";
import { mainColor } from "../styles/variables";

import background from "../images/background.jpg";
import me from "../images/me.jpg";

const MainImageDiv = styled.div`
  z-index: -1;
  position: relative;
  background-image: url(${background});
  background-size: cover;
  padding-top: 51.32%;
  top: 7rem;

  @media screen and (max-width: 700px) {
    top: 14.2rem;
  }

  .summary-and-me {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 6rem;
    left: 20%;
    right: 20%;

    @media screen and (max-width: 900px) {
      left: 10%;
      right: 10%;
    }

    @media screen and (max-width: 550px) {
      flex-direction: column-reverse;
    }

    .summary {
      max-width: 50rem;
      margin-right: 2rem;

      p {
        @media screen and (max-width: 550px) {
          text-align: center;
        }
        @media screen and (max-width: 700px) {
          text-shadow: 2px 2px 13px #000000, 2px 2px 13px #000000,
            2px 2px 13px #000000, 2px 2px 13px #000000;
        }
      }
    }

    .me img {
      width: 20rem;
      border: 2px solid ${mainColor};
      border-radius: 100%;

      @media screen and (max-width: 900px) {
        width: 15rem;
      }

      @media screen and (max-width: 550px) {
        margin-bottom: 2rem;
      }
    }
  }
`;

const MainImage = (): JSX.Element => {
  return (
    <MainImageDiv>
      <div className="summary-and-me">
        <div className="summary">
          <p>
            I am a full-stack web developer interested in modern web
            technologies who also enjoys gaming and gamedev.
          </p>
        </div>
        <div className="me">
          <img alt="My face" src={me} />
        </div>
      </div>
    </MainImageDiv>
  );
};

export default MainImage;
