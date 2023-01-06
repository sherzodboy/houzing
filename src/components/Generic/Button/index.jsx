import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width, height }) => {
  return (
    <Container onClick={onClick} type={type} height={height} width={width}>
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
