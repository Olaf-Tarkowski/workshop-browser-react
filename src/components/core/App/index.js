import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import IsComming from "../IsComming";
import { Container } from "./styled";

function WorkshopBrowser() {

  return (
    <Container>
      <IsComming />
      <Navbar />
      <Footer />
    </Container>
  );
}

export default WorkshopBrowser;
