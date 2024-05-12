import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard', () => {
  beforeEach(() => {
    // Mock the localStorage.getItem function to avoid redirect in the Dashboard component
    Storage.prototype.getItem = jest.fn(() => 'mockToken');
    render(<Dashboard />);
  });

  test('renders Sidebar', () => {
    const sidebarElement = screen.getByTestId('sidebar');
    expect(sidebarElement).toBeInTheDocument();
  });

  test('renders Header', () => {
    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders WelcomeBanner', () => {
    const welcomeBannerElement = screen.getByTestId('welcomeBanner');
    expect(welcomeBannerElement).toBeInTheDocument();
  });

});