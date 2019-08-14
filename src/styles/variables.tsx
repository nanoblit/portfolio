import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const black = "#000000";
export const white = "#F5DFFF";
export const mainColor = "#993F95";

export const iconZoom = 1.2;

export const FontAwesomeIconWithScaling = styled(FontAwesomeIcon)`
  transition: transform 0.2s;

  &:hover {
    transform: scale(${iconZoom});
  }

  @media screen and (max-width: 650px) {
    font-size: 5rem;
  }
`;
