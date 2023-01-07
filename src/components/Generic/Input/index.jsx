import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(
  (
    {
      type,
      onChange,
      value,
      height,
      width,
      defaultValue,
      placeholder,
      name,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          icon={icon}
          placeholder={placeholder}
          name={name}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          type={type}
          height={height}
          width={width}
        />
      </Wrapper>
    );
  }
);

export default Input;
