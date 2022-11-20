import './App.scss';
import Navigation from './components/Navigation';
import RoutesMapping from './common/routes/RoutesMapping';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <RoutesMapping />
    </div>
  );
};

export default App;
