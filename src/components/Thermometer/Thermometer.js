export function Thermometer({ temperature }) {
    return (
        <>
            <div>
                {temperature > 0 && (<div className="hot">{temperature}</div>)}
                {temperature < 0 && (<div className="cold">{temperature}</div>)}
                {temperature === 0 && (<div>{temperature}</div>)}
            </div>
        </>
    )
}
