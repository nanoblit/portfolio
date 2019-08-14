import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";
import {
  faHtml5,
  faLess,
  faJs,
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { mainColor, FontAwesomeIconWithScaling } from "../styles/variables";

const SkillsDiv = styled.div`
  background-color: ${mainColor};
  text-align: center;
  padding: 3rem 0 3rem;
  margin-bottom: 4rem;

  .skills-icons {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 3rem;
  }
`;

const Skills = (): JSX.Element => {
  return (
    <SkillsDiv>
      <h2>Skills</h2>
      <Reveal effect="fadeInUp" cascade>
        <div className="skills-icons">
          <FontAwesomeIconWithScaling icon={faHtml5} size="7x" />
          <FontAwesomeIconWithScaling icon={faLess} size="7x" />
          <FontAwesomeIconWithScaling icon={faJs} size="7x" />
          <FontAwesomeIconWithScaling icon={faReact} size="7x" />
          <FontAwesomeIconWithScaling icon={faNodeJs} size="7x" />
        </div>
      </Reveal>
      <p>HTML5, CSS3, Less, ES6+</p>
      <br />
      <br />
      <p>React, Styled-Components, React Router, Redux</p>
      <br />
      <br />
      <p>Node, Express, Knex, SQL, Jest</p>
    </SkillsDiv>
  );
};

export default Skills;
