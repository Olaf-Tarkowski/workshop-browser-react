import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import About from "../../features/About";
import Contact from "../../features/Contact";
import Home from "../../features/Home";
import { StyledList, StyledNavLink } from "./styled";

const Navbar = () => {

  return (
    <HashRouter>
      <nav>
        <StyledList>
          <li><StyledNavLink to="/home">Home</StyledNavLink></li>
          <li><StyledNavLink to="/about">About</StyledNavLink></li>
          <li><StyledNavLink to="/contact">Contact</StyledNavLink></li>
        </StyledList>
      </nav>
      <Switch>
        <Route path="/home">
        <Home/>
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
}

export default Navbar;
