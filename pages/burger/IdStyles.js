import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  background-color: #000;
  @media screen and (max-width: 480px) {
    height: auto;
    text-align: center;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ImgContainer = styled.div`
  width: 80%;
  height: 80%;
  position: relative;
  @media screen and (max-width: 480px) {
    width: 70vw;
    height: 70vw;
  }
`;

export const Right = styled.div`
  flex: 1;
  padding-top: 50px;
`;
export const Title = styled.h1`
  color: #fff;
  @media screen and (max-width: 480px) {
    margin: 5px;
  }
`;

export const Price = styled.span`
  color: #edb026;
  font-size: 24px;
  font-weight: 400;
`;
export const Desc = styled.p`
  color: #fff;
  @media screen and (max-width: 480px) {
    padding: 10px 20px;
  }
`;

export const Choose = styled.h3`
  padding: 5px;
  color: #fff;
`;

export const Sizes = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

export const Size = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  size:nth-child(2) {
    width: 40px;
    height: 40px;
  }
  size:last-child {
    width: 50px;
    height: 50px;
  }
`;
export const Number = styled.span`
  position: absolute;
  top: -18px;
  background-color: #edb026;
  color: white;
  font-size: 13px;
  padding: 0 5px;
  border-radius: 10px;
  @media screen and (max-width: 480px) {
    font-size: 11px;
    padding: 0 3px;
  }
`;

export const Choose1 = styled.h3`
  color: #fff;
`;

export const Ingredients = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-size: 14px;
  font-weight: 500;
  @media screen and (max-width: 480px) {
    margin: 10px;
    font-size: 18px;
  }
`;
export const Label = styled.label`
  color: #fff;
`;

export const Add = styled.div`
  margin-top: 20px;
`;

export const Quantity = styled.input`
  width: 50px;
  height: 30px;
  @media screen and (max-width: 480px) {
    height: 50px;
    padding: 10px 20px;
  }
`;

export const Button = styled.button`
  height: 30px;
  margin-left: 20px;
  background-color: #edb026;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    height: 50px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
`;
export const Input = styled.input`
  width: 20px;
  height: 20px;
`;
