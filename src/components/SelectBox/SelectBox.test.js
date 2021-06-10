import SelectBox from "./SelectBox";
import {fireEvent, render, screen} from '@testing-library/react';

test('', () => {
    const options = [1, 2, 3];
    const onSelect = jest.fn();
    render(<SelectBox options={options} onSelect={onSelect} />);
    const element = screen.getByTestId('select-box');
    expect(element).toBeInTheDocument();
    fireEvent.select(element, options[2]);
    expect(element).toHaveTextContent('3');
    expect(onSelect).toBeCalled();
});