import React from "react";
import { Card, CardHeader, CardBody, Flex, Text } from "@chakra-ui/react";

import DevChIcon from "../assets/devchallenges.svg";
import MainInput from "./MainInput";
function LoginBox() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <Card width={500} variant={"outline"} className="login_box">
        <CardHeader className="login_card_header">
          <img src={DevChIcon} alt="Dev Challenges" />
        </CardHeader>

        <CardBody>
          <Text as={"b"} fontSize={"18px"}>
            Join thousands of learners from around the world
          </Text>
          <div className="h_10" />
          <Text fontSize={"16px"}>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Text>

          <MainInput />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default LoginBox;
