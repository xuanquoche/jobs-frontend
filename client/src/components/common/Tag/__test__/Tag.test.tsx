import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Tag } from '../index';

test('button click event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Tag onClick={handleClick} text="click me" />);
  fireEvent.click(getByText('click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button text rendering', () => {
  const { getByText } = render(<Tag text="Submit" />);
  expect(getByText('Submit')).toBeInTheDocument();
});
