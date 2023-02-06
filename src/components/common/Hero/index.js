import {
  FirstLine,
  Img,
  Logo,
  LogoContainer,
  SecondLine,
  Section,
  StyledImg,
  ThirdLine,
} from "./styled";
import Nissan350z from "../../resources/foto/350z.jpg";
import Impreza from "../../resources/foto/impreza.jpg";
import S2000 from "../../resources/foto/s2000.jpg";
import Nissan370z from "../../resources/foto/370z.jpg";
import Supra from "../../resources/foto/supra.jpg";
import Skyline from "../../resources/foto/skyline.jpg";
import DarkLogo from "../../resources/images/LogoWhitePro.png";

const Hero = () => {
  return (
    <Section>
      <LogoContainer>
        <Logo src={DarkLogo} />
      </LogoContainer>
      <FirstLine>
        <StyledImg>
          <Img src={Nissan350z} />
        </StyledImg>
        <StyledImg>
          <Img src={Impreza} />
        </StyledImg>
        <StyledImg>
          <Img src={S2000} />
        </StyledImg>
        <StyledImg>
          <Img src={Nissan370z} />
        </StyledImg>
        <StyledImg>
          <Img src={Supra} />
        </StyledImg>
      </FirstLine>
      <SecondLine>
        <StyledImg>
          <Img src={Nissan350z} />
        </StyledImg>
        <StyledImg>
          <Img src={Impreza} />
        </StyledImg>
        <StyledImg>
          <Img src={S2000} />
        </StyledImg>
        <StyledImg>
          <Img src={Nissan370z} />
        </StyledImg>
        <StyledImg>
          <Img src={Supra} />
        </StyledImg>
        <StyledImg>
          <Img src={Skyline} />
        </StyledImg>
      </SecondLine>
      <ThirdLine>
        <StyledImg>
          <Img src={Nissan350z} />
        </StyledImg>
        <StyledImg>
          <Img src={Impreza} />
        </StyledImg>
        <StyledImg>
          <Img src={S2000} />
        </StyledImg>
        <StyledImg>
          <Img src={Nissan370z} />
        </StyledImg>
        <StyledImg>
          <Img src={Supra} />
        </StyledImg>
      </ThirdLine>
    </Section>
  );
};

export default Hero;
