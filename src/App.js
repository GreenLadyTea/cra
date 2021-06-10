import './App.css';
import Details from "./components/Details/Details";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ClickCounter from "./components/ClickCounter/ClickCounter";
import Thermometer from "./components/Thermometer/Thermometer";
import ReverseString from "./components/ReverseString/ReverseString";
import ReverseButton from "./components/ReverseButton/ReverseButton";
import Alert from "./components/Alert/Alert";
import TrafficLight from "./components/TrafficLight/TrafficLight";
import SelectBox from "./components/SelectBox/SelectBox";
import WebTodos from "./components/WebTodos/WebTodos";

function App() {
  return (
    <div className="App">
        <h1>React компоненты</h1>

        <h2>1. Лайк</h2>

        <h2>2. Обратный отсчёт</h2>
        <CountdownTimer />

        <h2>3. Число Фибоначчи</h2>

        <h2>4. Обратная строка</h2>
        <ReverseString text="А роза ☻ упала на ! лапу 7:4 Азора☻" />

        <h2>5. Alert</h2>
          <Alert text="Тревога, волк украл зайчат!" delay={5} />

        <h2>6. Обратная строка с кнопкой</h2>
          <ReverseButton text="☻!тевирП"/>

        <h2>7. Градусник</h2>
        <Thermometer temperature={39} />
        <Thermometer temperature={-50} />
        <Thermometer temperature={0} />

        <h2>8. Светофор</h2>
          <TrafficLight />

        <h2>9. Счётчик</h2>
        <ClickCounter />

        <h2>10. Счётчик с переменным шагом</h2>

        <h2>11. Селектбокс</h2>
        <SelectBox options={[1, 2, 3]} onSelect={value => console.log(value)} />

        <h2>12. Компонент для неважной информации</h2>
        <Details shortText="Лицензионное соглашение" text="Настоящее соглашение дает вам нижеследующие права..."/>

        <h2>13. Обращение к сети</h2>
        <WebTodos />
    </div>
  );
}

export default App;
