import DashboardWrapper from "../components/wrappers/DashboardWrapper";
import { Button, Card, Divider, Flex, Text } from "@chakra-ui/react";
import AuthFooter from "../components/auth/AuthFooter";
import InfoCard from "../components/misc/InfoCard";
import Pic from "../assets/devchallenges.png";
const data = [
  { label: "PHOTO", value: Pic, isValueImg: true },
  { label: "NAME", value: "test" },
  { label: "BIO", value: "test" },
  { label: "PHONE", value: "test" },
  { label: "EMAIL", value: "test" },
  { label: "PASSWORD", value: "test" },
];
function Info() {
  return (
    <DashboardWrapper>
      <div className="flex_col flex_center_y mt_10">
        <Text fontSize={35}>Personal Info</Text>
        <Text>Basic info, like your name and photo</Text>
        <div className="h_40" />
        <Card width={700} variant={"outline"} className="login_box">
          <Flex justifyContent={"space-between"}>
            <div>
              <Text fontSize={25}>Profile</Text>
              <Text fontSize={12} color={"GrayText"}>
                some info may be visible to other people
              </Text>
            </div>
            <Button variant={"outline"} colorScheme="gray">
              Edit
            </Button>
          </Flex>
          <div className="h_20" />
          <Divider />
          {data.map((d) => (
            <>
              <InfoCard
                label={d.label}
                value={d.value}
                isValueImg={d.isValueImg || false}
              />
              <Divider />
            </>
          ))}
        </Card>
        <div style={{ width: 700 }}>
          <AuthFooter />
        </div>
      </div>
    </DashboardWrapper>
  );
}

export default Info;
