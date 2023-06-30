import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";

type MainInputProps = {
  icon: React.ReactNode;
  placeholder?: string;
  type?: string;
};

function MainInput({ icon, placeholder, type }: MainInputProps) {
  return (
    <InputGroup className="input_field">
      <InputLeftElement pointerEvents="none" children={icon} />
      <Input type={type || "text"} placeholder={placeholder} />
    </InputGroup>
  );
}

export default MainInput;
