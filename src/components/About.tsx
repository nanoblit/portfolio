import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";

const AboutDiv = styled.div`
  max-width: 104.2rem;
  margin: -21rem auto 3rem;
  padding: 2rem;

  @media screen and (max-width: 1600px) {
    margin-top: -14rem;
  }

  @media screen and (max-width: 1200px) {
    margin-top: -8rem;
  }

  @media screen and (max-width: 900px) {
    margin-top: -1rem;
  }

  @media screen and (max-width: 700px) {
    margin-top: 4.2rem;
  }

  @media screen and (max-width: 550px) {
    margin-top: 22.2rem;
  }

  @media screen and (max-width: 450px) {
    margin-top: 27.2rem;
  }

  @media screen and (max-width: 400px) {
    margin-top: 32.2rem;
  }

  @media screen and (max-width: 350px) {
    margin-top: 41.2rem;
  }
`;

const About = (): JSX.Element => {
  return (
    <AboutDiv>
      <Reveal effect="fadeInUp">
        <h2>About</h2>
        <p>
          Since childhood I&apos;ve been interested in computers, programming
          and making games. Through the years I dabbled in C++, Java, JavaScript
          and C#. I made a few small games and went to university to study
          Computer Science. I learned there how to finish tasks on tight
          deadline from having to learn for exams for many different subjects at
          once.
          <br />
          <br />
          After two years I decided I wasn&apos;t learning enough of what I was
          interested in and was wasting my time on subjects like electrical
          engineering. I left to continue learning on my own. I went to multiple
          game jams (hackathons where you create games, often in teams) where I
          learned a lot about teamwork and good communications skills. <br />
          <br />
          Later on I found Lambda School, a truly modern coding school, which
          teaches its students through lectures, small and big projects. I
          decided to take the chance and join to become a web developer.
          Participating in game jams and Lambda School have taught me a lot
          about problem solving and helped me improve my work ethic. Now
          I&apos;m excited to learn more about new skills, tech and frameworks.
        </p>
      </Reveal>
    </AboutDiv>
  );
};

export default About;
