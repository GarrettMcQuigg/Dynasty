import Header from './components/Header';
import Content from './components/Content';
import Rankings from './components/Rankings';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <div className='bg-sleeper-bg min-h-screen'>
      <Header />
      <div className='md:flex pt-12 md:px-24 px-4 gap-12'>
        <Content />
        <Rankings />
      </div>
    </div>
  );
}

export default App;
