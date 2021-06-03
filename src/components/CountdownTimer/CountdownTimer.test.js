import CountdownTimer from "./CountdownTimer";
import {act, render, screen} from '@testing-library/react';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});

test('Отображается таймер, в начале показывает 10, через 5 секунд - 5, ещё через 5 - 0, а затем пропадает', () => {
    render(<CountdownTimer />);
    act(() => {
        jest.advanceTimersByTime(100);
    });
    expect(screen.getByTestId('timer')).toHaveTextContent('10');
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(screen.getByTestId('timer')).toHaveTextContent('5');
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(screen.getByTestId('timer')).toHaveTextContent('0');
    act(() => {
        jest.advanceTimersByTime(5000);
    });
    expect(screen.getByTestId('timer')).toHaveTextContent('0');
});
