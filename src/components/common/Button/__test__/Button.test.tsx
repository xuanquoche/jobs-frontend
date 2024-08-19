import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import { Button } from '../index';

test('button click event', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick} text="click me" />);
  fireEvent.click(getByText('click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test('button text rendering', () => {
  const { getByText } = render(<Button text="Submit" />);
  expect(getByText('Submit')).toBeInTheDocument();
});

test('button disabled', () => {
  const { getByText } = render(<Button disabled={true} text="Submit" />);
  expect(getByText('Submit')).toBeDisabled();
})
