import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import About from "../../features/About";
import Contact from "../../features/Contact";
import Home from "../../features/Home";
import {
  Section,
  Logo,
  Nav,
  StyledNavLink,
  HamburgerMenuContainer,
  NavSection,
} from "./styled";
import DarkLogo from "../../resources/images/FooxLogo.png";
import Container from "../Container";
import HamburgerMenu from "react-hamburger-menu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <HashRouter>
      <Section>
        <Container>
          <Nav>
            <Logo src={DarkLogo} />
            <NavSection isOpen={isOpen}>
              <StyledNavLink to="/home">Home</StyledNavLink>
              <StyledNavLink to="/about">About</StyledNavLink>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </NavSection>
            <HamburgerMenuContainer>
              <HamburgerMenu
                isOpen={isOpen}
                menuClicked={handleClick}
                width={24}
                height={20}
                strokeWidth={2}
                rotate={0}
                color={isOpen ? "#000000" : "#000000"}
                borderRadius={0}
                animationDuration={0.5}
              />
            </HamburgerMenuContainer>
          </Nav>
        </Container>
      </Section>
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
