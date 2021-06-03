import {useState} from "react";
import './Details.css';

export default function Details({shortText, text}) {
    const MORE = 'Подробнее';
    const HIDE = 'Скрыть';
    const [details, setDetails] = useState(MORE);

    function handleClick() {
        setDetails(() => {
            if(details === MORE)
            {
                return HIDE;
            } else {
                return MORE;
            }
        });
    }

    return(
        <>
            <div>
                <span className="bold-text" data-testid="short-text">{shortText} </span>
                {details === HIDE && (<span data-testid="long-text"> {text} </span>)}
                <span onClick={() => handleClick()} className="link" data-testid="link">{details}</span>
            </div>
        </>
    )
}
