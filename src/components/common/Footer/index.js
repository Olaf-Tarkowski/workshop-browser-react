import Container from "../Container";
import { Copyrights, Display, Info, Logo, SectionFooter, Text } from "./styled";
import WhiteLogo from "../../resources/images/FooxLogo.png";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <SectionFooter>
      <Info>
        <Container>nara</Container>
      </Info>
      <Copyrights>
        <Container>
          <Display>
            <Logo src={WhiteLogo} />
            <Text>Copyright {currentYear} FooxGarage. All Rights Reserved</Text>
          </Display>
        </Container>
      </Copyrights>
    </SectionFooter>
  );
};

export default Footer;
