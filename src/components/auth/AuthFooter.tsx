import { Flex, Link, Text } from "@chakra-ui/react";

function AuthFooter() {
  return (
    <Flex justifyContent={"space-between"}>
      <Text fontSize={"14px"} color={"#828282"} align={"center"}>
        created by{" "}
        <Link href="https://github.com/adil2190" target="_blank">
          <Text as={"u"}>adil2190</Text>
        </Link>
      </Text>
      <Text fontSize={"14px"} color={"#828282"} align={"center"}>
        <Link href="https://devchallenges.io/" target="_blank">
          devChallenges.io
        </Link>
      </Text>
    </Flex>
  );
}

export default AuthFooter;
