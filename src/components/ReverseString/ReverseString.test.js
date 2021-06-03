import ReverseString from "./ReverseString";
import {render, screen} from "@testing-library/react";

test('Переданная строка успешно переворачивается', () => {
    const string = 'А роза ☻ упала на ! лапу 7:4 Азора☻';
    render(<ReverseString text={string} />);
    const element = screen.getByTestId('reverse');
    expect(element).toHaveTextContent('☻арозА 4:7 упал ! ан алапу ☻ азор А');
});
