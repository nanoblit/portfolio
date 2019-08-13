import React from "react";
import styled from "styled-components";
import { mainColor } from "../styles/variables";

const ContactDiv = styled.div`
  background-color: ${mainColor};
  text-align: center;
  padding: 3rem 0 3rem;
  margin-bottom: 10rem;
`;

const Contact = (): JSX.Element => {
  return (
    <ContactDiv>
      <h2>Contact</h2>
    </ContactDiv>
  );
};

export default Contact;
