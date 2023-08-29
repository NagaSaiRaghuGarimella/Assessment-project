import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Banner from './Components/Banner';
import Section from './Components/Section';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Banner></Banner>
        <Section/>
      </BrowserRouter>
    </div>
  );
}

export default App;
