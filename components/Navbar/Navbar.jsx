import Image from "next/image";
import { Nav, Img, NavMenu, Span, Cart, Div } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Img src="../img/logo-big-pons-negro.png" alt="Logo" height="120px" />
      <NavMenu>
        <Span>Inicio</Span>
        <Span>Productos</Span>
        <Span>Menu</Span>
        <Span>Take Away</Span>
        <Span>Franquicias</Span>
        <Cart>
          <img src="../img/cart.png" alt="cart" width="32px" height="32px" />
          <Div>1</Div>
        </Cart>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
