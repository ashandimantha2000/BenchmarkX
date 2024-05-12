import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Signin from '../Signin';

// Mock the axios.post function to avoid making actual HTTP requests
jest.mock('axios');
const axios = require('axios');

// Mock the useNavigate hook from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Signin', () => {
  beforeEach(() => {
    axios.post.mockResolvedValue({ data: 'OK' });
    render(<Signin />);
  });

  test('renders Signin form', () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('************');
    const signInButton = screen.getByText('SIGN IN');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();
  });

  test('submits form and calls axios.post with correct data', async () => {
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('************');
    const signInButton = screen.getByText('SIGN IN');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(signInButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith('http://localhost:5555/login', {
        email: 'test@example.com',
        password: 'password123',
      });
    });
  });
});