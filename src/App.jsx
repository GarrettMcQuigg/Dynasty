import Header from './components/Header';
import Content from './components/Content';
import Rankings from './components/Rankings';

function App() {
  return (
    <div className='bg-sleeper-bg min-h-screen'>
      <Header />
      <div className='md:flex pt-12 px-12 gap-12'>
        <Content />
        <Rankings />
      </div>
    </div>
  );
}

export default App;
