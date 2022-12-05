import Footer from "../../common/Footer";
import Loader from "../../common/Loader";
import Navbar from "../../common/Navbar";
import { StyledPage } from "./styled";

function WorkshopBrowser() {

  return (
    <StyledPage>
      <Loader />
      <Navbar />
      <Footer />
    </StyledPage>
  );
}

export default WorkshopBrowser;
