import Container from "../Container";
import { Copyrights, Display, Info, Logo, SectionFooter, Text } from "./styled";
import WhiteLogo from "../../resources/images/FooxLogo.png";
import { Fade } from "react-reveal";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <SectionFooter>
      <Fade duration={1000} delay={100}>
        <Info>
          <Container>nara</Container>
        </Info>
        <Copyrights>
          <Container>
            <Display>
              <Logo src={WhiteLogo} />
              <Text>
                Copyright {currentYear} FooxGarage. All Rights Reserved
              </Text>
            </Display>
          </Container>
        </Copyrights>
      </Fade>
    </SectionFooter>
  );
};

export default Footer;
