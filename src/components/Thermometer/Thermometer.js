import './Thermometer.css'

export default function Thermometer({ temperature }) {
    function getClass() {
        if (temperature > 0) return "hot";
        if (temperature < 0) return "cold";
        return "zero";
    }

    return (
        <>
            <div className={getClass()} data-testid="thermometer">{temperature}</div>
        </>
    )
}
