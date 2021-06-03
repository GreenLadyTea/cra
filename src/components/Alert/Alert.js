import React, {useState} from 'react';

export default function Alert({ text, delay }) {
    const [message, setMessage] = useState(text);

    setTimeout(() => {setMessage(() => '')}, delay * 1000);

    return(
        <>
            <div data-testid="alert">
                {message}
            </div>
        </>
    );
}
