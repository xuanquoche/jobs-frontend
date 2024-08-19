import { render, fireEvent, screen } from '@testing-library/react';
import { Input } from "../index.tsx"


test('input change event', () => {
  render(<Input placeholder="Enter text" type={'email'} />);
  const inputElement = screen.getByPlaceholderText('Enter text') as HTMLInputElement;

  fireEvent.change(inputElement, { target: { value: 'hello' } });

  expect(inputElement.value).toBe('hello');
});
