import {LoaderContainer, Logo} from "./styled";
import DarkLogo from "../../resources/images/NewSvg.svg"


const Loader = () => {
  return (
    <LoaderContainer>
      <Logo src={DarkLogo} alt={""} />
    </LoaderContainer>
  );
};

export default Loader;
