import logo from './logo.svg';
import './App.css';
import {Route, Router, Switch } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Home from './page/Home/Home';
import Admin from './page/Admin/Admin';

const history = createBrowserHistory()
function App() {
  return (
    <Router history = {history}>
      <Switch>
        <Route path="/admin" exact component = {Admin} />
        <Route path="/" exact component = {Home} />
      </Switch>
    </Router>
  );
}

export default App;
