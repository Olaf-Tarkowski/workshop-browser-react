import { InvitationContainer, Logo, Text } from "./styled";
import DarkLogo from "../../resources/images/FooxLogo.png";

const IsComming = () => {
  return (
    <InvitationContainer>
      <Logo src={DarkLogo} alt={""} />
      <Text>Is Coming Soon</Text>
    </InvitationContainer>
  );
};

export default IsComming;
