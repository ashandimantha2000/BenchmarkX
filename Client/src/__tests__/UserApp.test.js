import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TestApp from '../TestApp';

// Mock the fetch function to avoid making actual HTTP requests
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'mockData' }),
  })
);

describe('TestApp', () => {
  beforeEach(() => {
    render(<TestApp />);
  });

  test('renders MyApp component', () => {
    const myAppComponent = screen.getByTestId('myApp');
    expect(myAppComponent).toBeInTheDocument();
  });

  test('calls fetch with the correct data on mouse move', () => {
    const eventData = { clientX: 100, clientY: 200 };
    fireEvent.mouseMove(window, eventData);

    expect(fetch).toHaveBeenCalledWith('http://localhost:5555/heatmap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ x: eventData.clientX, y: eventData.clientY }),
    });
  });
});