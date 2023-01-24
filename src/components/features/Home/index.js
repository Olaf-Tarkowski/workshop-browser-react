import Container from "../../common/Container";
import { Head, Img, SmaleImages, SmallBox, Text } from "./styled";
import Nissan from "../../resources/foto/car4.jpg";
import SteringWheel from "../../resources/images/SteringWheel.png";
import SparckPlug from "../../resources/images/SparckPlug1.png";
import Break from "../../resources/images/Break.png";
import Pistons from "../../resources/images/Pistons.png";

const Home = () => {
  return (
    <Head>
      <Img src={Nissan} />
      <Container>
        <SmallBox>
          <SmaleImages src={SteringWheel} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </Text>
        </SmallBox>
        <SmallBox>
          <SmaleImages src={SparckPlug} />
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </Text>
        </SmallBox>
        <SmallBox>
          <SmaleImages src={Break} />
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
    </Head>
  );
};

export default Home;
