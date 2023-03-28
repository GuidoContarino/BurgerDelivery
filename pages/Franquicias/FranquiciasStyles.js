import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background-image: url(/img/imgbackfranquicias.png);
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 1100px) {
    background-attachment: fixed;
  }
  @media (max-width: 880px) {
    background-attachment: fixed;
  }
  @media (max-width: 480px) {
    background-attachment: fixed;
  }
`;
export const Div = styled.div`
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  display: inline;
  line-height: 24px;
  margin: 16px 0px 0px;
  text-align: center;
`;
export const Title = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  color: #fff;
  font-family: Barlow Condensed;
  font-size: 40px;
  font-weight: 700;
`;

export const Container = styled.section`
  text-align: center;
`;

export const TopRow = styled.div`
  padding: 0 10px;
  display: inline-block;
  vertical-align: top;
`;
export const Card = styled.div`
  vertical-align: top;
  padding: 0 10px;
  max-width: 350px;
  display: inline-block;
  margin: 3rem;
`;
export const CardHeader = styled.div``;

export const TitleSuc = styled.h3`
  margin: 0px;
  color: #edb026;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 700;
`;

export const CardBody = styled.div`
  text-align: left;
  display: inline-block;
`;

export const List = styled.ul`
  padding-left: 0px;
  line-height: 12px;
`;

export const ListItem = styled.ol`
  padding-left: 0px;
  line-height: 20px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;
export const ListItem1 = styled.ol`
  padding-left: 0px;
  line-height: 20px;
  text-align: center;
  color: #edb026;
  margin-top: 5px;
  cursor: pointer;
`;
