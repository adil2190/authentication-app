import { Flex } from "@chakra-ui/react";
import DevChIcon from "../../assets/devchallenges.svg";
import React from "react";

function Header() {
  return (
    <Flex
      style={{ padding: "0 10px" }}
      height={70}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src={DevChIcon} alt="Dev Challenges" />
      <div className="header_menu">Menu</div>
    </Flex>
  );
}

export default Header;
