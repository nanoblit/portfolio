import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";
import * as Scroll from "react-scroll";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  black,
  mainColor,
  FontAwesomeIconWithScaling
} from "../styles/variables";

const ContactDiv = styled.div`
  background-color: ${mainColor};
  text-align: center;
  padding: 3rem 0 3rem;
  margin-bottom: 10rem;

  .contact-links {
    display: flex;
    justify-content: space-evenly;

    a {
      color: ${black};
      font-size: 1rem;
    }
  }
`;

const Contact = (): JSX.Element => {
  return (
    <ContactDiv>
      <Scroll.Element name="Contact" />
      <h2>Contact</h2>
      <Reveal effect="fadeInUp" cascade>
        <div className="contact-links">
          <a href="mailto:jakub.k.maleta@gmail.com">
            <FontAwesomeIconWithScaling icon={faEnvelope} size="7x" />
          </a>
          <a href="https://github.com/nanoblit/">
            <FontAwesomeIconWithScaling icon={faGithub} size="7x" />
          </a>
          <a href="https://www.linkedin.com/in/jakubmaleta/">
            <FontAwesomeIconWithScaling icon={faLinkedin} size="7x" />
          </a>
        </div>
      </Reveal>
    </ContactDiv>
  );
};

export default Contact;
