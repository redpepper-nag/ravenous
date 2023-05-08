import { BusinessList } from './Components/BusinessList.js';
import './App.css';
import { SearchBar } from './Components/SearchBar.js';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <h3>Ravenous</h3>
      </div>
      <div className="App-main">
        <SearchBar />
        <BusinessList />
      </div>
    </div>
  );
}

export default App;