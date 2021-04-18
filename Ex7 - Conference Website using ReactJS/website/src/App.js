import './App.css';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Committee from './components/Committee';
import Papers from './components/Papers';
import Dates from './components/Dates';
import Workshops from './components/Workshops';
import Registration from './components/Registration';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <nav>
        <Link to="/"> Home </Link> |
        <Link to="/committee"> Committee </Link> |
        <Link to="/papers"> Call for Papers </Link> |
        <Link to="/dates"> Important Dates </Link> |
        <Link to="/workshops"> Workshops </Link> |
        <Link to="/registration"> Registration </Link> |
        <Link to="/contact"> Contact </Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/committee">
          <Committee />
        </Route>
        <Route path="/papers">
          <Papers />
        </Route>
        <Route path="/dates">
          <Dates />
        </Route>
        <Route path="/workshops">
          <Workshops />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
