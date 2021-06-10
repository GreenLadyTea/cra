import {useEffect, useState} from "react";
import './TrafficLight.css'

export default function TrafficLight() {
    const colors = {
        RED: 'red',
        YELLOW_RED: 'yellowRed',
        GREEN: 'green',
        YELLOW_GREEN: 'yellowGreen'
    };

    const times = {
        MOVE: 3,
        WAIT: 1
    }

    const [color, setColor] = useState(colors.RED);

    useEffect(() => {
        if (color === colors.RED) setTimeout(() => setColor(colors.YELLOW_RED), times.MOVE * 1000);
        else if (color === colors.YELLOW_RED) {
            setTimeout(() => setColor(colors.GREEN), times.WAIT * 1000);
        } else if (color === colors.GREEN) {
            setTimeout(() => setColor(colors.YELLOW_GREEN), times.MOVE * 1000);
        } else if (color === colors.YELLOW_GREEN) {
            setTimeout(() => setColor(colors.RED), times.WAIT * 1000);
        }
    });

    return <>
        <div data-testid="1" className={'trafficLight ' + (color === colors.RED ? 'redLight' : '')} />
        <div data-testid="2" className={'trafficLight ' + (color === colors.YELLOW_GREEN || color === colors.YELLOW_RED ? 'yellowLight' : '')} />
        <div data-testid="3" className={'trafficLight ' + (color === colors.GREEN ? 'greenLight' : '')} />
    </>
}
