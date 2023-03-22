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
import { BEBIDAS } from "../../components/Constants";
import Link from "next/link";

export default function Navbar({ Navbar }) {
  return (
    <Wrapper>
      <Div>
        <Title1>BEBIDAS</Title1>
      </Div>
      <Container>
        {BEBIDAS.map((p, i) => {
          return (
            <Card key={i}>
              <Img src={p.img} alt={p.alt} width="50%" height="100%" />
              <CardBody>
                <CardText>
                  <Title>{p.name}</Title>
                  <Description>{p.desc}.</Description>
                  <Price>{p.price}</Price>
                </CardText>
                <Link href={"../bebidas/{p.name}"}>
                  <Button>Ver</Button>
                </Link>
              </CardBody>
            </Card>
          );
        })}
      </Container>
    </Wrapper>
  );
}
