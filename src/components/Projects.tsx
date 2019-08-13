import React from "react";
import styled from "styled-components";
import projectData from "../projectData";
import { mainColor, white } from "../styles/variables";

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

      @media screen and (max-width: 650px) {
        flex-direction: column;
      }

      .card-info {
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
      <h2>Projects</h2>
      <div className="cards">
        {projectData.map(
          (data): JSX.Element => {
            return (
              <div className="card" key={data.title}>
                <CardImg img={data.image} />
                <div className="card-info">
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
              </div>
            );
          }
        )}
      </div>
    </ProjectsDiv>
  );
};

export default Projects;
