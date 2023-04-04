import Image from "next/image";
import {
  Container,
  ImgContainer,
  Left,
  Price,
  Right,
  Title,
  Desc,
  Sizes,
  Choose,
  Size,
  Number,
  Choose1,
  Ingredients,
  Option,
  Label,
  Add,
  Quantity,
  Button,
  Input,
} from "./IdStyles";
import { useState } from "react";
import Link from "next/link";

export default function BurgerCard({ BurgerCard }) {
  const [size, setSize] = useState(0);
  const burger = {
    id: 1,
    img: "/img/SweetOnionSimple.jpeg",
    name: "Big Pons Simple + Papas",
    price: [2400, 2800, 3200],
    desc: "Medallon x1 Cheddar Fetas x2 Bacon Cebolla Crispy Aderezo Big Pons.",
  };

  return (
    <Container>
      <Left>
        <ImgContainer>
          <Image src={burger.img} objectFit="contain" layout="fill" alt="" />
        </ImgContainer>
      </Left>
      <Right>
        <Title>{burger.name}</Title>
        <Price>${burger.price[size]}</Price>
        <Desc>{burger.desc}</Desc>
        <Choose>Elegi el Tamaño</Choose>
        <Sizes>
          <Size onClick={() => setSize(0)}>
            <Image src="/img/burgersimple.png" layout="fill" alt="" />
            <Number>Simple</Number>
          </Size>
          <Size onClick={() => setSize(1)}>
            <Image src="/img/burgerdouble.png" layout="fill" alt="" />
            <Number>Doble</Number>
          </Size>
          <Size onClick={() => setSize(2)}>
            <Image src="/img/burgertriple.png" layout="fill" alt="" />
            <Number>Triple</Number>
          </Size>
        </Sizes>
        <Add>
          <Quantity type="number" defaultValue={1} />
          <Link href="../Cart/cart" passHref>
            <Button>Agregar a mi pedido</Button>
          </Link>
        </Add>
      </Right>
    </Container>
  );
}
