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
} from "./IdStyles";
import { useState } from "react";
import styles from "../../styles/product.module.css";

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
        <Choose1>Quitar Ingredientes</Choose1>
        <Ingredients>
          <Option>
            <input
              type="checkbox"
              id="Bacon"
              name="Bacon"
              className={styles.checkbox}
            />
            <Label htmlFor="Bacon">Bacon</Label>
          </Option>
          <Option>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Cheddar"
              name="Cheddar"
            />
            <Label htmlFor="Cheddar">Cheddar</Label>
          </Option>
          <Option>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Aderezo"
              name="Aderezo"
            />
            <Label htmlFor="Aderezo">Aderezo Big Pons</Label>
          </Option>
          <Option>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="Cebolla"
              name="Cebolla"
            />
            <Label htmlFor="Cebolla">Cebolla Crispy</Label>
          </Option>
        </Ingredients>
        <Add>
          <Quantity type="number" defaultValue={1} />
          <Button>Agregar a mi pedido</Button>
        </Add>
      </Right>
    </Container>
  );
}
