
import './App.css';
import MainScreen from './Components/MainScreen/MainScreen';
window.Telegram.WebApp.ready();

function App() {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}

export default App;
