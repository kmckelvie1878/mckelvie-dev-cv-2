import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

interface BasicModalProps {
    title: string;  
    isOpen: boolean;
    onClose: () => void;
    size: string;
    children: React.ReactNode;
};

function BasicModal({ title, isOpen, onClose, size, children}: BasicModalProps) {

  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} size={size} isCentered colorScheme="whiteAlpha">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <motion.div
              key={"modal-content"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicModal;