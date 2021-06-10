import TrafficLight from "./TrafficLight";
import {act, render, screen} from '@testing-library/react';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});

test('Отображается светофор, в начале показывает красный свет, через 3 секунды жёлтый, через 1 секунду зелёный, через 3 секунды жёлтый, потом через секунду снова красный', () => {
    render(<TrafficLight />);
    const firstCircle = screen.getByTestId('1');
    const secondCircle = screen.getByTestId('2');
    const thirdCircle = screen.getByTestId('3');

    expect(firstCircle).toHaveClass('redLight');
    expect(secondCircle).not.toHaveClass('yellowLight');
    expect(thirdCircle).not.toHaveClass('greenLight');

    act(() => {
        jest.advanceTimersByTime(3000);
    });

    expect(firstCircle).not.toHaveClass('redLight');
    expect(secondCircle).toHaveClass('yellowLight');
    expect(thirdCircle).not.toHaveClass('greenLight');

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    expect(firstCircle).not.toHaveClass('redLight');
    expect(secondCircle).not.toHaveClass('yellowLight');
    expect(thirdCircle).toHaveClass('greenLight');

    act(() => {
        jest.advanceTimersByTime(3000);
    });

    expect(firstCircle).not.toHaveClass('redLight');
    expect(secondCircle).toHaveClass('yellowLight');
    expect(thirdCircle).not.toHaveClass('greenLight');

    act(() => {
        jest.advanceTimersByTime(1000);
    });

    expect(firstCircle).toHaveClass('redLight');
    expect(secondCircle).not.toHaveClass('yellowLight');
    expect(thirdCircle).not.toHaveClass('greenLight');
});