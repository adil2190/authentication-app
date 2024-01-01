import { ChevronDownIcon, TriangleDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
  Text,
} from "@chakra-ui/react";

import Group from "../../assets/group.png";
import GroupWhite from "../../assets/group-white.png";
import Profile from "../../assets/profile-user.png";
import ProfileWhite from "../../assets/profile-user-white.png";
import { Link } from "react-router-dom";

function HeaderMenu() {
  const { colorMode } = useColorMode();
  return (
    <Menu>
      <MenuButton fontSize={14} fontWeight={500}>
        Mirza Adil <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Image
            boxSize={5}
            borderRadius="full"
            src={colorMode === "dark" ? ProfileWhite : Profile}
            mr="12px"
          />
          <span className="font_15">My Profile</span>
        </MenuItem>
        <MenuItem minH="40px">
          <Image
            boxSize={5}
            borderRadius="full"
            src={colorMode === "dark" ? GroupWhite : Group}
            mr="12px"
          />
          <span className="font_15">Group Chat</span>
        </MenuItem>
        <Divider />
        <MenuItem minH="40px" mt="10px">
          <Image
            boxSize={5}
            borderRadius="full"
            src={colorMode === "dark" ? GroupWhite : Group}
            mr="12px"
          />
          <Text className="font_15" color="red">
            <Link to="/">Logout</Link>
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default HeaderMenu;
