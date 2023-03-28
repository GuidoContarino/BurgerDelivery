import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 8px;
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Div = styled.div`
  z-index: 999;
  left: 6%;
  bottom: 28%;
  @media (max-width: 768px) {
    bottom: 33%;
  }
`;
export const Title = styled.h4`
  position: absolute;
  bottom: 40%;
  left: 15%;
  z-index: 999;
  font-size: 50px;
  color: #fff;
  font-family: Barlow Condensed;

  @media (max-width: 768px) {
    bottom: 63%;

    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    bottom: 63%;
  }
`;

export const Title1 = styled.span`
  color: #edb026;
  font-family: Barlow Condensed;
  font-size: 50px;
  z-index: 999;

  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    bottom: 3%;
  }
`;
export const Span = styled.h6`
  font-size: 20px;
  text-align: center;
  color: #000;
  text-shadow: 1px 1px 0 white;
`;

export const Form = styled.form`
  max-width: 600px;
  text-align: center;
  justify-content: center;
  margin: 20px auto;
  display: flex;
`;
export const HalfLeft = styled.div`
  width: 48%;
`;
export const Input = styled.input`
  border: 0;
  outline: 0;
  padding: 1em;
  border: 2px solid #000;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
`;
export const Button = styled.button`
  border: 0;
  outline: 0;
  padding: 1em;
  background-color: #000;
  color: #fff;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
`;
