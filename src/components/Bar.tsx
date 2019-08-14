import React from "react";
import styled from "styled-components";
import { iconZoom } from "../styles/variables";

const BarDiv = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0)
  );
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  padding-left: 4rem;

  @media screen and (max-width: 700px) {
    padding-top: 2rem;
    height: auto;
    padding-left: 0rem;
    flex-direction: column;
  }

  .bar-links {
    display: flex;
    align-items: center;
    margin-right: 12rem;

    @media screen and (max-width: 700px) {
      margin: 2rem 0 4rem;
    }

    a {
      margin-right: 4rem;
      text-decoration: none;
      transition: transform 0.2s;

      &:hover {
        transform: scale(${iconZoom});
      }

      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;

const Bar = (): JSX.Element => {
  return (
    <BarDiv>
      <h1>Jakub Maleta</h1>{" "}
      <div className="bar-links">
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
    </BarDiv>
  );
};

export default Bar;
