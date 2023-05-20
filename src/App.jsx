import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Rosters from './pages/Rosters';
import './styles/tailwind.css';

function App() {
  return (
    <div className='bg-sleeper-bg min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/:display_name' Component={Rosters} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
