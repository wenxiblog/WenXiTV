
// __tests__/ExampleComponent.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import ExampleComponent from '../components/ExampleComponent';
import { AuthProvider } from '../context/AuthContext';

test('renders loading state initially', () => {
  render(
    <AuthProvider>
      <ExampleComponent />
    </AuthProvider>
  );
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
});

test('renders data when fetched successfully', async () => {
  render(
    <AuthProvider>
      <ExampleComponent />
    </AuthProvider>
  );
  await waitFor(() => expect(screen.getByText(/Data/)).toBeInTheDocument());
});

test('renders error state on fetch failure', async () => {
  render(
    <AuthProvider>
      <ExampleComponent />
    </AuthProvider>
  );
  await waitFor(() => expect(screen.getByText(/Failed to fetch data/)).toBeInTheDocument());
});
