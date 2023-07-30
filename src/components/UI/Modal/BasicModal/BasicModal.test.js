// BasicModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import BasicModal from './BasicModal';

jest.mock('@chakra-ui/react', () => ({
  Modal: ({ children }) => children,
  ModalBody: ({ children }) => children,
  ModalCloseButton: ({ children }) => children,
  ModalContent: ({ children }) => children,
  ModalFooter: ({ children }) => children,
  ModalHeader: ({ children }) => children,
  ModalOverlay: () => null,
  Button: ({ children, onClick }) => (
    <button onClick={onClick}>{children}</button>
  ),
}));
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children }) => <div>{children}</div>,
  },
}));

describe('BasicModal component', () => {
  test('renders the modal with title and close button', () => {
    const title = 'Test Modal';
    const onClose = jest.fn();
    const size = 'md';
    const isOpen = true;
    const children = 'Modal content';

    render(
      <BasicModal title={title} isOpen={isOpen} onClose={onClose} size={size}>
        {children}
      </BasicModal>
    );

    const modalTitle = screen.getByText(title);
    const closeButton = screen.getByRole('button', { name: 'Close' });

    expect(modalTitle).toBeInTheDocument();
    expect(closeButton).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const isOpen = true;

    render(
      <BasicModal
        title="Test Modal"
        isOpen={isOpen}
        onClose={onClose}
        size="md"
      >
        Modal content
      </BasicModal>
    );

    const closeButton = screen.getByRole('button', { name: 'Close' });

    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
