import React from "react";
import styled from "styled-components";
import Reveal from "react-reveal/Reveal";
import * as Scroll from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import projectData from "../projectData";
import { mainColor, white, black, iconZoom } from "../styles/variables";

const ProjectsDiv = styled.div`
  margin: 0 auto;
  max-width: 118.8rem;

  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 1190px) {
      flex-direction: column;
      align-items: center;
    }

    .card {
      display: flex;
      margin-bottom: 4rem;
      transition: transform 0.2s;

      &:hover {
        transform: scale(1.05);
      }

      @media screen and (max-width: 650px) {
        flex-direction: column;
      }

      .card-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 0.5rem 0;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        width: 28.7rem;
        height: 28.7rem;
        background-color: ${mainColor};

        @media screen and (max-width: 650px) {
          border-top-right-radius: 0;
          border-bottom-left-radius: 1rem;
        }

        .upper-card-info {
          p {
            margin-bottom: 1rem;
          }

          .tags {
            display: flex;
            flex-wrap: wrap;

            span {
              padding: 0.2rem;
              border: 0.1rem solid ${white};
              border-radius: 0.5rem;
              margin: 0.4rem 0.8rem 0.4rem 0;
            }
          }
        }

        .lower-card-info {
          a {
            display: inline-block;
            margin-right: 0.5rem;
            margin-bottom: 0.5rem;
            transition: transform 0.2s;

            &:hover {
              transform: scale(${iconZoom});
            }
          }
        }
      }
    }
  }
`;

interface CardImgProps {
  img: string;
}

const CardImg = styled.div`
  background-image: url(${(props: CardImgProps): string => props.img});
  background-size: cover;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  width: 28.7rem;
  height: 28.7rem;

  @media screen and (max-width: 650px) {
    border-top-right-radius: 1rem;
    border-bottom-left-radius: 0;
  }
`;

const Projects = (): JSX.Element => {
  return (
    <ProjectsDiv>
      <Scroll.Element name="Projects" />
      <h2>Projects</h2>
      <div className="cards">
        {projectData.map(
          (data): JSX.Element => {
            return (
              <Reveal effect="fadeInUp" key={data.title}>
                <div className="card">
                  <CardImg img={data.image} />
                  <div className="card-info">
                    <div className="upper-card-info">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                      <div className="tags">
                        {data.tags.map(
                          (tag): JSX.Element => {
                            return <span key={tag}>{tag}</span>;
                          }
                        )}
                      </div>
                    </div>
                    <div className="lower-card-info">
                      {data.websiteLink && (
                        <a href={data.websiteLink}>
                          <FontAwesomeIcon
                            icon={faGlobeEurope}
                            size="2x"
                            color={black}
                          />
                        </a>
                      )}
                      {data.codeLink && (
                        <a href={data.codeLink}>
                          <FontAwesomeIcon
                            icon={faGithub}
                            size="2x"
                            color={black}
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          }
        )}
      </div>
    </ProjectsDiv>
  );
};

export default Projects;
