import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

import DevChIcon from "../assets/devchallenges.svg";
import MainInput from "./MainInput";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
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

          <MainInput
            icon={<EmailIcon color={"gray.500"} />}
            type="email"
            placeholder="Email"
          />
          <MainInput
            icon={<LockIcon color={"gray.500"} />}
            type="password"
            placeholder="Password"
          />
          <div className="h_10" />
          <Button style={{ width: "100%" }}>Start coding now</Button>
          <div className="h_20" />
          <Text fontSize={"14px"} color={"#828282"} align={"center"}>
            or continue with these social profile
          </Text>
          <div className="h_20" />
        </CardBody>
      </Card>
    </Flex>
  );
}

export default LoginBox;
