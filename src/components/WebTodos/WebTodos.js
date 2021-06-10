import { useState } from "react";

export default function WebTodos() {
    const [id, setId] = useState('');
    const [serverAnswer, setServerAnswer] = useState('');
    const URL = 'https://jsonplaceholder.typicode.com/';

    async function handleClick() {
        let response = await fetch(`${URL}/todos/:${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let task = await response.json();
        setServerAnswer(task.title);
    }

    return(
        <>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            <button onClick={() => handleClick()}>Получить</button>
            <div>{serverAnswer}</div>
        </>
    );
}