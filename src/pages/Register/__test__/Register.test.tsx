import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Register from '../index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock useNavigate function
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  it('should render without crashing', () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
    );
  });

  it('should enable the Continue button when all fields are filled correctly', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
    );

    // Get input fields
    const nameInput = getByPlaceholderText('Your Name');
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Xuanquoc2206@' } });

    // Wait for the component to update
    await waitFor(() => {
      // Assert that the Continue button is enabled
      expect(continueButton).not.toBeDisabled();
    });
  });

  it('should disable the Continue button when any field is empty or invalid', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Register />
      </QueryClientProvider>
    );

    // Get input fields
    const nameInput = getByPlaceholderText('Your Name');
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields with invalid data
    fireEvent.change(nameInput, { target: { value: '' } });
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    // Wait for the component to update
    await waitFor(() => {
      // Assert that the Continue button is disabled
      expect(continueButton).toBeDisabled();
    });
  });

});
