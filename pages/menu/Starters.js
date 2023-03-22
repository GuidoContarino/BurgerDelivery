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
  Wrapper,
  Title1,
  Div,
} from "./MenuStyles";
import Link from "next/link";
import { STARTERS } from "../../components/Constants";
import Bebidas from "./Bebidas";

export default function Navbar({ Navbar }) {
  return (
    <Wrapper>
      <Div>
        <Title1>STARTERS</Title1>
      </Div>
      <Container>
        {STARTERS.map((p, i) => {
          return (
            <Card key={i}>
              <Img src={p.img} alt={p.alt} width="50%" height="100%" />
              <CardBody>
                <CardText>
                  <Title>{p.name}</Title>
                  <Description>{p.desc}.</Description>
                  <Price>{p.price}</Price>
                </CardText>
                <Link href={"../starters/{p.name}"}>
                  <Button>Ver</Button>
                </Link>
              </CardBody>
            </Card>
          );
        })}
        <Bebidas />
      </Container>
    </Wrapper>
  );
}
