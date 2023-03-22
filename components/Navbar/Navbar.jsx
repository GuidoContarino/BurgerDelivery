import Image from "next/image";
import Link from "next/link";
import { Nav, Img, NavMenu, Span, Cart, Div } from "./NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <Img src="../img/logo-big-pons-negro.png" alt="Logo" height="120px" />
      </Link>
      <NavMenu>
        <Link href={"../menu/Local"}>
          <Span>Menu</Span>
        </Link>
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
