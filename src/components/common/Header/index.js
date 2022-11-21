import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import { StyledList, StyledNavLink } from "./styled";

const Header = () => {

  return (
    <HashRouter>
      <nav>
        <StyledList>
          <li><StyledNavLink to="/zadania">O mnie</StyledNavLink></li>
          <li><StyledNavLink to="/autor">Cennik</StyledNavLink></li>
        </StyledList>
      </nav>
      <Switch>
        <Route path="/zadania/:id">
          <div>Hejka</div>
        </Route>
        <Route path="/zadania">
        <div>Hej</div>
        </Route>
        <Route path="/autor">
        <div>Autor</div>
        </Route>
        <Redirect to="/zadania" />
      </Switch>
    </HashRouter>
  );
}

export default Header;
