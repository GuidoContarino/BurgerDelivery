import Image from "next/image";
import Link from "next/link";
import {
  Wrapper,
  Container,
  Title,
  Div,
  Img,
  TopRow,
  Card,
  CardHeader,
  TitleSuc,
  CardBody,
  List,
  ListItem,
  ListItem1,
} from "./FranquiciasStyles";
import { FRANQUICIAS } from "../../components/Constants";

export default function Navbar({ Navbar }) {
  return (
    <Wrapper>
      <Img src="/img/logoburger.png" />
      <Div>
        <Title>¿DÓNDE ENCONTARNOS?</Title>
      </Div>
      <Container>
        {FRANQUICIAS.map((p, i) => {
          return (
            <TopRow key={i}>
              <Card>
                <CardHeader>
                  <TitleSuc>{p.lugar}</TitleSuc>
                  <CardBody>
                    <List>
                      <ListItem>{p.calle}</ListItem>
                      <ListItem>{p.dias}</ListItem>
                      <ListItem>{p.hora}</ListItem>
                      <Link href="tel:{p.tel}" _blank>
                        <ListItem>{p.tel}</ListItem>
                      </Link>
                      <Link href={p.link} _blank>
                        <ListItem1>Ver en Maps</ListItem1>
                      </Link>
                    </List>
                  </CardBody>
                </CardHeader>
              </Card>
            </TopRow>
          );
        })}
      </Container>
    </Wrapper>
  );
}
