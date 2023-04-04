import Image from "next/image";
import styles from "../../styles/Cart.module.css";
import {
  Container,
  Table,
  Caption,
  Thead,
  Filas,
  Tbody,
  Td,
  Tr,
  Wrapper,
  Total,
  Title,
  Text,
  TotalText,
  TotalTextTitle,
  Button,
} from "./CartStyles";

const Cart = () => {
  return (
    <Container>
      <Table>
        <Caption>Pedido</Caption>
        <Thead>
          <Tr>
            <Filas>Producto</Filas>
            <Filas>Tamaño</Filas>
            <Filas>Cantidad</Filas>
            <Filas>Precio</Filas>
            <Filas>Total</Filas>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td data-label="Producto"> Big Pons Simple + Papas</Td>
            <Td data-label="Tamaño"> Simple </Td>
            <Td data-label="Cantidad"> 1</Td>
            <Td data-label="Precio"> $2.400</Td>
            <Td data-label="Total"> $2.400</Td>
          </Tr>
        </Tbody>
      </Table>
      <Total>
        <Wrapper>
          <Title>TOTAL DE LA COMPRA</Title>
          <Text>
            <TotalTextTitle>Subtotal:</TotalTextTitle> $2.400
          </Text>
          <TotalText>
            <TotalTextTitle>Descuento:</TotalTextTitle> $0.00
          </TotalText>
          <TotalText>
            <TotalTextTitle>Total:</TotalTextTitle> $2.400
          </TotalText>
          <Button>PAGAR!</Button>
        </Wrapper>
      </Total>
    </Container>
  );
};

export default Cart;
