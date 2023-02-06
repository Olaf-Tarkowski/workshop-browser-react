import Container from "../../common/Container";
import { Main, SmaleImages, SmallBox, Text } from "./styled";
import SteeringWheel from "../../resources/images/SteeringWheel.png";
import SparkPlug from "../../resources/images/SparkPlug.png";
import Brake from "../../resources/images/Brake.png";
import Pistons from "../../resources/images/Pistons.png";
import Hero from "../../common/Hero";

const Home = () => {
  return (
    <Main>
      <Hero />
      <Container>
        <SmallBox>
          <SmaleImages src={SteeringWheel} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </Text>
        </SmallBox>
        <SmallBox>
          <SmaleImages src={SparkPlug} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </Text>
        </SmallBox>
        <SmallBox>
          <SmaleImages src={Brake} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </Text>
        </SmallBox>
        <SmallBox>
          <SmaleImages src={Pistons} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </Text>
        </SmallBox>
      </Container>
    </Main>
  );
};

export default Home;
