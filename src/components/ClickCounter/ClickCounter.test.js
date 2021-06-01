import {fireEvent, render, screen} from '@testing-library/react';
import ClickCounter from "./ClickCounter";

test('Счетчик отображается и при нажатии на кнопку увеличивается на 1', () => {
    render(<ClickCounter />);
    const button = screen.getByTestId('button');
    const counter = screen.getByTestId('counter');

    expect(counter).toHaveTextContent('0');

    for(let i = 1; i < 101; i++) {
        fireEvent.click(button);
        expect(counter).toHaveTextContent(i.toString());
    }
});
