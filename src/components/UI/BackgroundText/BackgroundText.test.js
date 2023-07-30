import { render, screen } from '@testing-library/react';
import BackgroundText from './BackgroundText';

test('renders the background text', () => {
  render(<BackgroundText text="Hello World" />);
  
  const backgroundText = screen.getByText('Hello World');
  
  expect(backgroundText).toBeInTheDocument();
});

test('adjusts the font size and scale when the text length is greater than 5', () => {
  // For this test, you can set the window innerWidth to a specific value to trigger the scale change.
  // Here, I'm setting it to 800px, but you can adjust this value as needed for your specific test case.
  window.innerWidth = 800;

  render(<BackgroundText text="Testing Length Greater Than 5" />);
  
  const backgroundText = screen.getByText('Testing Length Greater Than 5');

  // Add your assertions based on the expected style changes for the text.
  // For example, you can check for specific font sizes or scale transformations.
});
