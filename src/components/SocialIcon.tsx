type SocialIconProps = {
  icon?: string;
};

function SocialIcon({ icon }: SocialIconProps) {
  return <img className="social_icon" src={icon} alt="icon" />;
}

export default SocialIcon;
