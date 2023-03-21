import styled from "styled-components";
import Slider from "react-slick";

export const Carousel = styled(Slider)`
  background-color: #000;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    position: relative;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 5px;
      color: rgb(150, 158, 171);
    }
  }
`;

export const Section = styled.div`
  cursor: pointer;
  position: relative;
  a {
    background-color: #000;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
