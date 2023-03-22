import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #edb026;
`;
export const Img = styled.img`
  height: 120px;
  cursor: pointer;
`;
export const NavMenu = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  list-style: none;
  color: black;
`;
export const Span = styled.span`
  margin: 30px;
  color: #211f1b;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  line-height: 19.5px;
  padding: 8px;
  text-align: left;
  text-transform: uppercase;
  cursor: pointer;
  font-family: Montserrat;
  &:hover {
    color: #ffff;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Cart = styled.div`
  position: relative;
`;
export const Div = styled.section`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: black;
`;
