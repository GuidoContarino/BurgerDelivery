import BurgerCard from "../BurgerCard/BurgerCard";
import { Container, Div, Wrapper, Title } from "./BurgerListStyles";

const BurgerList = () => {
  return (
    <Container>
      <Div>
        <Title>BURGERS</Title>
      </Div>
      <Wrapper>
        <BurgerCard />
      </Wrapper>
    </Container>
  );
};

export default BurgerList;
