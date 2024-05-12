import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  beforeEach(() => {
    render(<About />);
  });

  test('renders About title', () => {
    const titleElement = screen.getByText(/About BenchmarkX/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders welcome message', () => {
    const welcomeMessage = screen.getByText(/Welcome to BenchmarkX, the cutting-edge User Experience Evaluation and Digital Insights Platform designed to propel businesses into the future of digital innovation./i);
    expect(welcomeMessage).toBeInTheDocument();
  });

  test('renders get in touch title', () => {
    const getInTouchTitle = screen.getByText(/Get in touch/i);
    expect(getInTouchTitle).toBeInTheDocument();
  });

  test('renders visit our website button', () => {
    const visitWebsiteButton = screen.getByText(/Visit our website/i);
    expect(visitWebsiteButton).toBeInTheDocument();
  });
});