import React from "react";
import styled from "styled-components";
import { mainColor } from "../styles/variables";

const SkillsDiv = styled.div`
  background-color: ${mainColor};
  text-align: center;
  padding: 3rem 0 3rem;
  margin-bottom: 4rem;
`;

const Skills = (): JSX.Element => {
  return (
    <SkillsDiv>
      <h2>Skills</h2>
      <p>HTML5, CSS3, Less, ES6+</p>
      <br />
      <br />
      <p>React, Styled-Components, React Router, Redux</p>
      <br />
      <br />
      <p>Node, Express</p>
    </SkillsDiv>
  );
};

export default Skills;
