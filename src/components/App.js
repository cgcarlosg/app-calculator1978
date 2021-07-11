import './App.css';
import Display from './Display';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Display />
          <ButtonPanel />
        </header>
      </div>
    </>
  );
}

export default App;
