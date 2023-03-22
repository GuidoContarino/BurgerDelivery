import Image from "next/image";
import {
  FooterContainer,
  FooterContent,
  Logo,
  Desc,
  Socials,
  Links,
  FooterBottom,
  Span,
} from "./FooterStyles";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo src="../img/LogoBlanco.svg"></Logo>
        <Desc>
          Empresa de venta de hamburguesas estilo Clásico Americano, posee un
          sistema de operación simple y dinámico logrando una alta rentabilidad.
        </Desc>
      </FooterContent>
      <Socials>
        <Links href="https://www.facebook.com/profile.php?id=100054298580128">
          <AiFillFacebook size="2rem" />
        </Links>
        <Links href="https://www.instagram.com/big.pons/">
          <AiFillInstagram size="2rem" />
        </Links>
        <Links href="https://www.youtube.com/results?search_query=big+pons">
          <AiFillYoutube size="2rem" />
        </Links>
      </Socials>
      <FooterBottom>
        <Span>copyright &copy; 2023 Guido Contarino - Big Pons </Span>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
