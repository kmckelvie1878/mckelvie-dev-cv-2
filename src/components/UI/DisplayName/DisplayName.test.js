import { render, screen } from '@testing-library/react';
import DisplayName from './DisplayName';

describe('DisplayName component', () => {
  const mockProps = {
    firstName: 'John',
    lastName: 'Doe',
    jobTitle: 'Software Engineer',
  };

  test('displays the first name, last name, and job title', () => {
    render(<DisplayName {...mockProps} />);

    const firstNameElement = screen.getByText(mockProps.firstName);
    const lastNameElement = screen.getByText(mockProps.lastName);
    const jobTitleElement = screen.getByText(mockProps.jobTitle);

    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
    expect(jobTitleElement).toBeInTheDocument();
  });
});
