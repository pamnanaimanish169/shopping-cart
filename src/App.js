import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Switch>
        
        <Route  path="/"  exact>
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}

export default App;
