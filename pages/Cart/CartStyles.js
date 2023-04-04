import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 5px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  table-layout: fixed;
  @media screen and (max-widht: 600px) {
    border: none;
  }
`;

export const Caption = styled.caption`
  font-size: 28px;
  text-transform: uppercase;
  margin: 8px 0px;
  font-weight: 800;
  font-family: Montserrat;
  @media screen and (max-widht: 600px) {
    font-size: 22px;
  }
  @media screen and (max-widht: 480px) {
    font-size: 15px;
  }
`;

export const Thead = styled.thead`
  text-transform: uppercase;
  background-color: #ddd;
  font-family: Montserrat;
  @media (max-widht: 600px) {
    display: none;
  }
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Filas = styled.th`
  font-size: 16px;
  padding: 8px;
  text-align: center;
  font-family: Montserrat;
  @media screen and (max-widht: 600px) {
    font-size: 12px;
  }
  @media screen and (max-widht: 480px) {
    font-size: 8px;
  }
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  @media screen and (max-widht: 600px) {
    margin-bottom: 8px;
    display: block;
  }
  @media screen and (max-widht: 480px) {
    margin-bottom: 8px;
    display: block;
  }
`;

export const Td = styled.td`
  font-size: 16px;
  padding: 8px;
  text-align: center;
  font-family: Montserrat;
  @media screen and (max-widht: 600px) {
    font-size: 12px;
    display: block;
    @media screen and (max-widht: 480px) {
      display: block;
    }
  }
`;

export const Total = styled.div`
  width: 100%;
  margin: auto;
  padding: 5px;
  padding-top: 10px;
`;

export const Wrapper = styled.div`
  background-color: #333;
  padding: 50px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

export const Title = styled.h6`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-family: Montserrat;
  text-align: center;
`;

export const TotalText = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  margin: 5px;
`;

export const Text = styled.div`
  margin: 5px;
`;

export const TotalTextTitle = styled.b`
  font-family: Montserrat;
  font-size: 15px; ;
`;

export const Button = styled.button`
  height: 30px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
`;
