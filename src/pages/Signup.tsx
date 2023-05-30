import SignupBox from "../components/SignupBox";
// import { Button, useColorMode } from "@chakra-ui/react";
function Signup() {
  // const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div>
      {/* <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button> */}
      <SignupBox />
    </div>
  );
}

export default Signup;
