import {fireEvent, render, screen} from '@testing-library/react';
import Details from "./Details";

test('Отображается короткий текст и ссылка подробнее, при нажатии на неё отображается полный текст и ссылка Скрыть', () => {
    const shortText = 'Ололо';
    const text = 'Я нло, я нло, я нло';

    render(<Details shortText={shortText} text={text} />);
    const short = screen.getByTestId('short-text');
    const link = screen.getByTestId('link');

    expect(short).toBeInTheDocument();
    expect(short).toHaveTextContent(shortText);
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent('Подробнее');

    fireEvent.click(link);
    const long = screen.getByTestId('long-text');
    expect(long).toBeInTheDocument();
    expect(long).toHaveTextContent(text);
    expect(link).toHaveTextContent('Скрыть');
});
