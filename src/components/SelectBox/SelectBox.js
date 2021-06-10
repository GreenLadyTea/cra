import {useState} from "react";

export default function SelectBox({options, onSelect}) {
    const [value, setValue] = useState(options[0]);
    return(
        <>
            <label>
                Выберите значение:
                <select
                    data-testid="select-box"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    onSelect={onSelect(value)}
                >
                    {Object.values(options).map((variant, index) => (<option key={index}>{variant}</option>))}
                </select>
            </label>
        </>
    );
}