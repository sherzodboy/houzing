import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  value,
  height,
  width,
  defaultValue,
  placeholder,
  name,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
      height={height}
      width={width}
    />
  );
};

export default Input;
