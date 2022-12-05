import {LoaderContainer, Logo} from "./styled";
import DarkLogo from "../../resources/images/NewSvg.svg"


const Loader = () => {
  return (
    <LoaderContainer isLight={isLight}>
      <Logo src={DarkLogo} alt={""} />
    </LoaderContainer>
  );
};

export default Loader;
