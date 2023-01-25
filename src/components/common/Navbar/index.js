import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import About from "../../features/About";
import Contact from "../../features/Contact";
import Home from "../../features/Home";
import { Background, Logo, Nav, StyledList, StyledNavLink } from "./styled";
import DarkLogo from "../../resources/images/FooxLogo.png";
import Container from "../Container";

const Navbar = () => {
  return (
    <HashRouter>
      <Background>
        <Container>
          <Nav>
            <Logo src={DarkLogo} />
            <StyledList>
              <li>
                <StyledNavLink to="/home">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/about">About</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </li>
            </StyledList>
          </Nav>
        </Container>
      </Background>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Redirect to="/home" />
      </Switch>
    </HashRouter>
  );
};

export default Navbar;
