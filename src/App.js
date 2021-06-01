import './App.css';
import Details from "./components/Details/Details";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ClickCounter from "./components/ClickCounter/ClickCounter";

function App() {
  return (
    <div className="App">
        <CountdownTimer />
        <Details shortText="Лицензионное соглашение" text="Настоящее соглашение дает вам нижеследующие права..."/>
        <ClickCounter />
    </div>
  );
}

export default App;
