import LoginBox from "../components/LoginBox";
// import { Button, useColorMode } from "@chakra-ui/react";
function Login() {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <LoginBox />
    </div>
  );
}

export default Login;
