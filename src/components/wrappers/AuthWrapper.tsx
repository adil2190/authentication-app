import { Flex } from "@chakra-ui/react";
import AuthFooter from "../auth/AuthFooter";

type AuthWrapperProps = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: AuthWrapperProps) {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} height={"100vh"}>
      <div>
        {children}
        <AuthFooter />
      </div>
    </Flex>
  );
}

export default AuthWrapper;
