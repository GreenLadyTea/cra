import {useState} from "react";

export default function ReverseButton({ text }) {
    const [content, setContent] = useState(text);

    function reverseText(text) {
        return [ ...text].reverse().join('');
    }

    function handleClick() {
        setContent(() => reverseText(content))
    }

    return(
        <>
            <div>
                <div data-testid="content">{content}</div>
                <button data-testid="button" onClick={() => handleClick()}>Перевернуть</button>
            </div>
        </>
    )
}
