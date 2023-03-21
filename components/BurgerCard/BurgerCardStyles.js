import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1100px) {
    width: 50%;
    margin: 20px;
  }
  @media (max-width: 880px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    margin: 15px;
  }
`;

export const Img = styled.img`
  @media (max-width: 480px) {
    object-fit: fill;
  }
`;

export const Card = styled.section`
  margin: 0;
  height: 15em;
  display: flex;
  background-color: #000;
  box-shadow: 1px 3px 3px #edb026;
  @media (max-width: 480px) {
    box-shadow: none;
    padding: 10px;
  }
`;
export const CardBody = styled.div`
  width: 12em;
  max-height: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding: 1.6em;
`;
export const CardText = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 0.8em 0;
  padding: 0;
`;

export const Title = styled.h3`
  margin-top: 0;
  color: #fff;
  font-size: 14px;
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
export const Price = styled.span`
  margin-top: 0;
  color: #fff;
`;

export const Description = styled.p`
  margin-top: 0;
  color: #fff;
  font-size: 13px;
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  min-width: 8.3em;
  flex: none;
  align-self: flex-start;
  margin-top: auto;
  padding: 0.6em 1.2em;
  font-size: 0.92em;
  color: #fff;
  background: #edb026;
  border: 0.5px solid #777;
  border-radius: 2px;
  cursor: pointer;
  z &:hover {
    border-color: #d099a0;
  }
`;
/*
export const CardText = styled.div`
  position: relative;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0 0.8em 0;
  padding: 0;
`;

export const Name = styled.h3`
  margin-top: 0;
`;

export const Desc = styled.p`
  margin-top: 0;
`;
*/
