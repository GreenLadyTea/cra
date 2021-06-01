import {useState} from "react";

export default function ClickCounter() {
    const [counter, setCounter] = useState(0);
    function handleClick() {
        setCounter(() => {
            return counter + 1;
        });
    }
    return(
        <>
            <div>
                <button onClick={() => handleClick()} data-testid="button">
                    Нажми меня!
                </button>
                <div data-testid="counter">
                    Счетчик нажатий: {counter}
                </div>
            </div>
        </>
    )
}
