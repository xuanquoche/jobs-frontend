import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import Login from '../index';
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
        <Login />
      </QueryClientProvider>
    );
  });

  it('should enable the Continue button when all fields are filled correctly', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );
  
    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');
  
    // Fill input fields
    fireEvent.change(emailInput, { target: { value: 'quocntx@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Xuanquoc2206@' } });

    // Click on the Continue button
    fireEvent.click(continueButton);

  });

  it('should disable the Continue button when password is empty', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields with empty password
    fireEvent.change(emailInput, { target: { value: 'quocntx@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: '' } });

    // Click on the Continue button
    fireEvent.click(continueButton);

  });

  it('should disable the Continue button when email is empty', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields with empty email
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'Xuanquoc2206@' } });

    // Click on the Continue button
    fireEvent.click(continueButton);

  });

  it('should disable the Continue button when email is invalid and password is valid', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields with invalid email and valid password
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    fireEvent.change(passwordInput, { target: { value: 'Xuanquoc2206@' } });

    // Click on the Continue button
    fireEvent.click(continueButton);

  });

  it('should disable the Continue button when password is invalid and email is valid', async () => {
    const queryClient = new QueryClient();
    const { getByPlaceholderText, getByText } = render(
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    );

    // Get input fields
    const emailInput = getByPlaceholderText('Your email');
    const passwordInput = getByPlaceholderText('Password');
    const continueButton = getByText('Continue');

    // Fill input fields with valid email and invalid password
    fireEvent.change(emailInput, { target: { value: 'quocntx@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'invalidpassword' } });

    // Click on the Continue button
    fireEvent.click(continueButton);

  });

});
