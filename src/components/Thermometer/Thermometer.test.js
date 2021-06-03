import { render, screen } from '@testing-library/react';
import Thermometer from "./Thermometer";

test('Показывает температуру синим, если ниже 0', () => {
    const temp = -30;
    render(<Thermometer temperature={temp}/>);
    const element = screen.getByTestId('thermometer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(temp.toString());
    expect(element).toHaveClass('cold');
});

test('Показывает температуру красным, если выше 0', () => {
    const temp = 24;
    render(<Thermometer temperature={temp}/>);
    const element = screen.getByTestId('thermometer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(temp.toString());
    expect(element).toHaveClass('hot');
});

test('Показывает температуру серым, если 0', () => {
    const temp = 0;
    render(<Thermometer temperature={temp}/>);
    const element = screen.getByTestId('thermometer');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(temp.toString());
    expect(element).toHaveClass('zero');
    expect(element).not.toHaveClass('hot', 'cold');
});
