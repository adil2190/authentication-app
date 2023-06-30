import {
  Card,
  CardHeader,
  CardBody,
  Flex,
  Text,
  Button,
} from "@chakra-ui/react";

import { Link, useNavigate } from "react-router-dom";

import DevChIcon from "../../assets/devchallenges.svg";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

import GithubIcon from "../../assets/Gihub.svg";
import FacebookIcon from "../../assets/Facebook.svg";
import TwitterIcon from "../../assets/Twitter.svg";
import GoogleIcon from "../../assets/Google.svg";

import MainInput from "../input/MainInput";
import SocialIcon from "../misc/SocialIcon";
import AuthWrapper from "../wrappers/AuthWrapper";

function LoginBox() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/info");
  };
  return (
    <AuthWrapper>
      <Card width={473} variant={"outline"} className="login_box">
        <CardHeader className="login_card_header">
          <img src={DevChIcon} alt="Dev Challenges" />
        </CardHeader>

        <CardBody>
          <Text as={"b"} fontSize={"18px"}>
            Login
          </Text>
          <div className="h_10" />

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
          <Button onClick={handleLogin} style={{ width: "100%" }}>
            <Text>Login</Text>
          </Button>
          <div className="h_20" />
          <Text fontSize={"14px"} color={"#828282"} align={"center"}>
            or continue with these social profile
          </Text>
          <div className="h_20" />
          <div className="social_icon_wrapper">
            <SocialIcon icon={GithubIcon} />
            <SocialIcon icon={FacebookIcon} />
            <SocialIcon icon={TwitterIcon} />
            <SocialIcon icon={GoogleIcon} />
          </div>
          <div className="h_20" />
          <Text fontSize={"14px"} color={"#828282"} align={"center"}>
            Don’t have an account yet?{" "}
            <Link className="link" to={"/signup"}>
              Register
            </Link>
          </Text>
        </CardBody>
      </Card>
    </AuthWrapper>
  );
}

export default LoginBox;
