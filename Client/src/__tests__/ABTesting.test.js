import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ABTesting from './ABTesting';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock server response
const server = setupServer(
  rest.get('http://localhost:5555/varientA', (req, res, ctx) => {
    return res(ctx.json({ count: 10 }));
  }),
  rest.get('http://localhost:5555/varientB', (req, res, ctx) => {
    return res(ctx.json({ count: 20 }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders ABTesting component', async () => {
  render(<ABTesting />);

  // Check if the component renders correctly
  expect(screen.getByText(/A\/B Testing/i)).toBeInTheDocument();

  // Wait for the fetch calls to complete
  await waitFor(() => screen.getByText(/CTA Clicks :/i));

  // Check if the fetched data is displayed correctly
  expect(screen.getByText(/10/i)).toBeInTheDocument();
  expect(screen.getByText(/20/i)).toBeInTheDocument();
});

test('renders the most optimal variant', async () => {
  render(<ABTesting />);

  // Wait for the fetch calls to complete
  await waitFor(() => screen.getByText(/CTA Clicks :/i));

  // Check if the most optimal variant is displayed correctly
  expect(screen.getByText(/Varient B is performing better*/i)).toBeInTheDocument();
});