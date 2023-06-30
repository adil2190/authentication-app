import { useColorMode } from "@chakra-ui/react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className="dark_mode_toggle">
      <DarkModeSwitch
        style={{ marginBottom: "2rem" }}
        checked={colorMode === "dark"}
        onClick={toggleColorMode}
        onChange={() => null}
        size={30}
      />
    </div>
  );
}

export default ThemeToggle;
