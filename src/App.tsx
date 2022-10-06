import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Login from './pages/Login';
import Readings from './pages/Readings';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/readings" element={<Readings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
