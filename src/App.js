import Header from './Components/Header/Header';
import CounterValue from './Components/CounterValue/CounterValue';
import './App.css';
import store from './Redux/store';

function App() {
  return (
    <div className="App">
     <Header/>
     <CounterValue />
    
    </div>
  );
}

export default App;
