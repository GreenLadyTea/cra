import ReverseButton from "./ReverseButton";
import {fireEvent, render, screen} from "@testing-library/react";

test('Отображается текст и кнопка, при нажатии текст переворачивается', () => {
    const text = 'А роза ☻ упала на ! лапу 7:4 Азора☻';
    const reverseText = '☻арозА 4:7 упал ! ан алапу ☻ азор А';

    render(<ReverseButton text={text} />);

    const element = screen.getByTestId('button');
    const string = screen.getByTestId('content');

    expect(element).toBeInTheDocument();
    expect(string).toBeInTheDocument();
    expect(string).toHaveTextContent(text);

    fireEvent.click(element);
    expect(string).toHaveTextContent(reverseText);
});
