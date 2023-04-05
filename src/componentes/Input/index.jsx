import React, { forwardRef } from "react";
import { StyledInput } from "./styles";

const Input = forwardRef(({ label, placeholder, type, id, error, ...rest }, ref) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <StyledInput
        placeholder={placeholder}
        id={id}
        type={type}
        {...rest}
        ref={ref}
      />
      <p>{error}</p>
    </>
  );
});

export default Input;
