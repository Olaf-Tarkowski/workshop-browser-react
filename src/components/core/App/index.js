import Footer from "../../common/Footer";
import Loader from "../../common/Loader";
import Navbar from "../../common/Navbar";
import { Container } from "./styled";

function WorkshopBrowser() {

  return (
    <Container>
      <Loader />
      <Navbar />
      <Footer />
    </Container>
  );
}

export default WorkshopBrowser;
