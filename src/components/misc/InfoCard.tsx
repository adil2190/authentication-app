import { Button, Card, Divider, Flex, Text } from "@chakra-ui/react";

type InfoCardProps = {
  label: string;
  value: string;
  isValueImg?: boolean;
};

function InfoCard({ label, value, isValueImg }: InfoCardProps) {
  return (
    <div className="w_100p info_card">
      <div className="info_card_flex">
        <Text
          className="w_40p"
          color={"GrayText"}
          display={"flex"}
          alignItems={"center"}
        >
          {label}
        </Text>
        <div className="w_60p flex_center_y">
          {isValueImg ? <img src={value} alt="" /> : value}
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
