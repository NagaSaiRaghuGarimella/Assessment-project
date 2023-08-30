import './App.css';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HomePage></HomePage>
      </BrowserRouter>
    </div>
  );
}

export default App;
