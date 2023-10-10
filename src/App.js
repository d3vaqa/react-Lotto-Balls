import logo from './logo.svg';
import './App.css';
import Lotto from './Lotto';

function App() {
  return (
    <div className="App">
          <Lotto />
          <Lotto title="Mini Display" numBalls={5} maxNum={10} />
          <Lotto title="Mini Display" numBalls={4} maxNum={10} />
          <Lotto title="Mini Display" numBalls={3} maxNum={10} />
          <Lotto title="Mini Display" numBalls={2} maxNum={10} />

          
          
    </div>
  );
}

export default App;
