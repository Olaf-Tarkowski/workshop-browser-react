import { LoaderContainer, Logo, Text } from "./styled";
import DarkLogo from "../../resources/images/FooxLogo.png";

const Loader = () => {
  return (
    <LoaderContainer>
      <Logo src={DarkLogo} alt={""} />
      <Text>Is Coming Soon</Text>
    </LoaderContainer>
  );
};

export default Loader;
