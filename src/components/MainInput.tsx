import { PhoneIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import React from "react";

function MainInput() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<PhoneIcon color="gray.300" />}
      />
      <Input type="tel" placeholder="Phone number" />
    </InputGroup>
  );
}

export default MainInput;
