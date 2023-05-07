import logo from './logo.svg';
import './App.css';
import bootstrap from '../src/styles/bootstrap.min.css'
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
    </div>
  );
}

export default App;
