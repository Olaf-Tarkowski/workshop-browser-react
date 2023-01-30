import Container from "../../common/Container";
import {
  Img,
  SectionImg,
  Section,
  StyledImg,
  StyledImgBelow,
  Text,
  ImgBelow,
} from "./styled";
import Nissan350z from "../../resources/foto/350z.jpg";
import Impreza from "../../resources/foto/impreza.jpg";
import S2000 from "../../resources/foto/s2000.jpg";
import Nissan370z from "../../resources/foto/370z.jpg";
const About = () => {
  return (
    <Container>
      <Section>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not
        </Text>
        <SectionImg>
          <div>
            <StyledImg>
              <Img src={Nissan350z} />
            </StyledImg>
            <StyledImgBelow>
              <StyledImg>
                <Img src={Impreza} />
              </StyledImg>
            </StyledImgBelow>
          </div>
          <ImgBelow>
            <StyledImg>
              <Img src={S2000} />
            </StyledImg>
            <StyledImgBelow>
              <StyledImg>
                <Img src={Nissan370z} />
              </StyledImg>
            </StyledImgBelow>
          </ImgBelow>
        </SectionImg>
      </Section>
    </Container>
  );
};

export default About;
