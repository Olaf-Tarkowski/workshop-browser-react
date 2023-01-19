import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";
import PreLoading from "../../common/PreLoading";
import { Container } from "./styled";

function WorkshopBrowser() {

  return (
    <Container>
      <PreLoading />
      <Navbar />
      <Footer />
    </Container>
  );
}

export default WorkshopBrowser;
