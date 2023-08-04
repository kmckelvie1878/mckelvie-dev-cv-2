import { render, screen, fireEvent } from '@testing-library/react';
import { useColorMode } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';

jest.mock('@chakra-ui/react', () => {
  const actualChakra = jest.requireActual('@chakra-ui/react');
  return {
    ...actualChakra,
    useColorMode: jest.fn(),
  };
});

describe('ThemeToggle component', () => {
  test('switches color mode when clicked', () => {
    // Mock the toggleColorMode hook behavior
    const mockToggleColorMode = jest.fn();
    (useColorMode as jest.Mock).mockReturnValue({ toggleColorMode: mockToggleColorMode });

    // Render the component
    render(<ThemeToggle />);

    // Simulate a click event on the component
    fireEvent.click(screen.getByLabelText('Dark mode'));

    // Expect the toggleColorMode function to have been called
    expect(mockToggleColorMode).toHaveBeenCalledTimes(1);
  });
});
