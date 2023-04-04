import {
  Wrapper,
  Title,
  Div,
  Img,
  Title1,
  Form,
  Span,
  HalfLeft,
  Input,
  Button,
} from "./BigPonsStyles";

import React, { useRef } from "react";

export default function Navbar({ Navbar }) {
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Wrapper>
      <Div>
        <Title>
          TRABAJÁ EN
          <br />
          <Title1>BIG PONS</Title1>
        </Title>
      </Div>
      <Img src="../../img/fondotrabajo.png" alt="Fondo Trabajo" />
      <Span>
        Completá el formulario con tus datos y adjunta tu Cv (Curriculum Vitae)
        en formato pdf únicamente
      </Span>
      <Form>
        <HalfLeft>
          <Input
            type="text"
            id="input-name"
            placeholder="Nombre Completo"
          ></Input>
          <Input type="email" id="input-email" placeholder="Email"></Input>
          <Input type="tel" id="input-number" placeholder="WhatsApp"></Input>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".pdf"
          />
          <Button>Enviar</Button>
        </HalfLeft>
      </Form>
    </Wrapper>
  );
}
