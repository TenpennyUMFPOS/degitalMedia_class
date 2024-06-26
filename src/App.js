
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Game from './components/Game.js';
import Scoreboard from './components/Scoreboard.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Scoreboard" element={<Scoreboard />} />




      </Routes>
    </Router>
  );
}

export default App;
