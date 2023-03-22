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
  Price,
} from "./BurgerCardStyles";
import { BURGERS } from "../Constants";
import Link from "next/link";

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
                <Price>{p.price}</Price>
              </CardText>
              <Link href={"../burger/{p.name}"}>
                <Button>Ver</Button>
              </Link>
            </CardBody>
          </Card>
        );
      })}
    </Container>
  );
};

export default BurgerCard;
