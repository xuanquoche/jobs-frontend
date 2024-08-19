import { render,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tick from '../index.tsx';
import EditIcon from "../../../../assets/icon/Edit.png"

test('render Tick component with text and icon', () => {
  const { getByText, getByAltText } = render(<Tick icon="tick" text="Example" />);
  expect(getByText('Example')).toBeInTheDocument();
  expect(getByAltText('icon')).toBeInTheDocument();
});

test('render Tick component without icon', () => {
  const { getByText, queryByAltText } = render(<Tick text="Example" />);
  expect(getByText('Example')).toBeInTheDocument();
  expect(queryByAltText('icon')).toBeNull();
});

test('renders TickList with function passed into button', () => {
  const mockFunction = jest.fn();
  // Render the TickList component with the mocked function
  const { getByTestId } = render(<Tick icon={EditIcon} onClick={mockFunction} />); 

  // Find the button element and simulate a click event
  const button = getByTestId('icon');// Changed name to 'icon'
  fireEvent.click(button);

  // Assert that the mock function is called when the button is clicked
  expect(mockFunction).toHaveBeenCalled();
});
