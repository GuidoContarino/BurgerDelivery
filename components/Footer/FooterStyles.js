import styled from "styled-components";

export const FooterContainer = styled.section`
  border-top: #b7903c solid 5px;

  background: #000;
  height: auto;
  padding-top: 40px;
  color: #fff;
`;

export const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Logo = styled.img`
  height: 150px;
`;
export const Desc = styled.p`
  font-family: Montserrat;
  max-width: 500px;
  line-height: 28px;
  font-size: 14px;
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Socials = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.a`
  margin: 20px;
  background: #000;
  align-items: center;
  justify-content: center;
`;
export const FooterBottom = styled.div`
  background: #000;
  padding-bottom: 40px;
  text-align: center;
`;

export const Span = styled.p`
  align-items: center;
  font-family: Montserrat;
  font-size: 14px;
  word-spacing: 2px;
  text-transform: capitalize;
`;
