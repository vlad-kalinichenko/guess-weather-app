import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from './NotFound';

const mockNavigate = jest.fn();

// Mock useNavigate to return the mockNavigate function
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

describe('NotFound', () => {
  test('renders the component', () => {
    render(<NotFound />);

    // Assert that the component renders without errors
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  test('navigates to home page when "Back Home" button is clicked', () => {
    render(<NotFound />);
    fireEvent.click(screen.getByRole('button', { name: 'Back Home' }));

    // Assert that the navigate function is called with the expected path
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
