import Image from "next/image";
import {
  Container,
  Title,
  Description,
  Card,
  CardBody,
  CardText,
  Button,
  Img,
} from "./BurgerCardStyles";
import { BURGERS } from "../Constants";

const BurgerCard = () => {
  return (
    <Container>
      {BURGERS.map((p, i) => {
        return (
          <Card key={i}>
            <Img src={p.img} alt={p.alt} width="50%" height="100%" />
            <CardBody>
              <CardText>
                <Title>{p.name}</Title>
                <Description>{p.desc}.</Description>
              </CardText>
              <Button>{p.price}</Button>
            </CardBody>
          </Card>
        );
      })}
    </Container>
  );
};

export default BurgerCard;
