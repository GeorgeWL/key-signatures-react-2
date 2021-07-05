import { Route, Switch, useLocation } from "react-router";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ChordCard from "./ChordCard";
import CircleList from "./CircleOfFifths/CircleList";
const Main = () => {
  let location = useLocation();
  return (
    <main>
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Switch location={location}>
            <Route path="/chord">
              <ChordCard />
            </Route>
            <Route></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <CircleList />
    </main>
  );
};
export default Main;
