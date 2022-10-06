import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Readings from './pages/Readings';
import Navigation from './components/Navigation';
import RoutesMapping from './common/routes/routesMapping';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <RoutesMapping />
    </div>
  );
};

export default App;
