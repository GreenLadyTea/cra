import {useEffect, useState} from 'react';

export default function CountdownTimer() {
    const [remainingTime, setRemainingTime] = useState(10);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime(remainingTime => {
                if (remainingTime) {
                    return remainingTime - 1;
                }
                clearInterval(timerId);
                return 0;
            });
        }, 1000);

        return () => {
            clearInterval(timerId);
        }
    }, [])

    return (
        <>
            <div data-testid="timer">{remainingTime}</div>
        </>
    );
}
