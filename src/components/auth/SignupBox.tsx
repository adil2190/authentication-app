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

function SignupBox() {
  const navigate = useNavigate();
  const handleSignup = () => {
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
          <Button onClick={handleSignup} style={{ width: "100%" }}>
            <Text>Start coding now</Text>
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
            Already a member?{" "}
            <Link className="link" to={"/login"}>
              Login
            </Link>
          </Text>
        </CardBody>
      </Card>
    </AuthWrapper>
  );
}

export default SignupBox;
