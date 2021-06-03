import Alert from "./Alert";
import {act, render, screen} from '@testing-library/react';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.useRealTimers();
});

test('Компонент отображает переданную в пропсах текст и через количество секунд, указанных в delay, надпись пропадает', () => {
    const delay = 6;
    const text = 'Тревога, волк украл зайчат!';
    render(<Alert text={text} delay={delay}/>);

    act(() => {
        jest.advanceTimersByTime(3000);
    });
    expect(screen.getByTestId('alert')).toHaveTextContent(text);

    act(() => {
        jest.advanceTimersByTime(delay * 1000 - 3000);
    });
    expect(screen.getByTestId('alert')).toHaveTextContent('');
});
