import { render } from '@testing-library/react';
import Sidebar from '../index'
import '@testing-library/jest-dom'

describe('Sidebar component', () => {
  test('renders title correctly', () => {
    const { getByText } = render(<Sidebar title="Test Title" />);
    const titleElement = getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  test('renders tick list items correctly', () => {
    const { getByText } = render(<Sidebar />);
    const tick1 = getByText(/Unlimited product uploads/i);
    const tick2 = getByText(/Pro tips/i);
    const tick3 = getByText(/Free forever/i);
    const tick4 = getByText(/Full author options/i);

    expect(tick1).toBeInTheDocument();
    expect(tick2).toBeInTheDocument();
    expect(tick3).toBeInTheDocument();
    expect(tick4).toBeInTheDocument();
  });

});
