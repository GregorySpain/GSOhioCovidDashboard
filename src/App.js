import './App.css';
import GraphCases from './getCovidData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Gregory Spain's Ohio Covid Dashboard</h1>
        </div>
      </header>
      <div>
        <GraphCases />
        
      </div>
      
    </div>
  );
}

export default App;
