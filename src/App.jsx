import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Teampage from './pages/Teampage';
import './styles/tailwind.css';

function App() {
  return (
    <div className='bg-sleeper-bg min-h-screen'>
      <Router>
        <Routes>
          <Route path='/' Component={Homepage} />
          <Route path='/:display_name' Component={Teampage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
